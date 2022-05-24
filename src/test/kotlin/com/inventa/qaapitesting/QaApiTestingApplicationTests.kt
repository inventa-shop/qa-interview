package com.inventa.qaapitesting

import io.restassured.RestAssured
import io.restassured.RestAssured.given
import io.restassured.module.kotlin.extensions.Extract
import io.restassured.module.kotlin.extensions.Given
import io.restassured.module.kotlin.extensions.Then
import io.restassured.module.kotlin.extensions.When
import io.restassured.response.Response
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import org.apache.http.HttpStatus
import org.hamcrest.CoreMatchers
import org.hamcrest.MatcherAssert
import org.hamcrest.core.IsEqual
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest


@SpringBootTest
class ExampleTestApiApplicationTests : BaseTest() {

	@Test
	fun `get single product`() {
		Given {
			spec(requestSpecification)
		} When {
			get("/1")
		} Then {
			statusCode(HttpStatus.SC_OK)
			body("name", IsEqual.equalTo("Paçoquita"))
		}
	}

	@Test
	fun `create a new product`() {
		val requestBody = Product(name="Paçoquita", description = "Doce", sku=1)
		val productId: Int = Given {
			spec(requestSpecification)
			body(Json.encodeToString(requestBody))
		} When {
			post()
		} Then {
			statusCode(HttpStatus.SC_OK)
			body(
				"name", IsEqual.equalTo("Paçoquita"),
				"description", IsEqual.equalTo("Doce"),
				"sku", IsEqual.equalTo(1)
			)
		} Extract {
			path("id")
		}

		MatcherAssert.assertThat(productId, CoreMatchers.`is`(CoreMatchers.notNullValue()))
	}

	@Test
	fun postRequest() {
		val requestBody = Product(name="Paçoquita", description = "Doce", sku=1)
		val response: Response = given()
			.header("Content-type", "application/json")
			.and()
			.body(Json.encodeToString(requestBody))
			.`when`()
			.post("products")
			.then()
			.extract().response()
		Assertions.assertEquals(200, response.statusCode())
		Assertions.assertEquals("Paçoquita", response.jsonPath().getString("name"))
		Assertions.assertEquals("Doce", response.jsonPath().getString("description"))
		Assertions.assertEquals("1", response.jsonPath().getString("sku"))
		Assertions.assertNotNull(response.jsonPath().getString("id"))
		Assertions.assertTrue(response.jsonPath().getString("id") is String)
		Assertions.assertTrue(response.jsonPath().getString("id").toLong() > 0)
	}
}