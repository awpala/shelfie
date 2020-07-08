UPDATE products
SET product_name = ${product_name}, price = ${price}, img_url = ${img_url}
WHERE product_id = ${id};