package com.inventa.qaapitesting

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity(name="products")
data class Product(
    @Id @GeneratedValue
    var id: Long? = null,
    var name: String,
    var sku: Long,
    var description: String
) {
}