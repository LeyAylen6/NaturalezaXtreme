API Endpoints documentación:

#### **📍 POST | /bulkArticles **

Utiliza assets.js para hacer un bulk engit la base de datos de artículos hardcodeados en un array de objetos (que deben respetar el formato de la interface articleStructure.ts con la salvedad de que pueden no tener las propiedades que están como "nullable: true" en articleEntity.ts: size, shoeSize, brand, description, rating y comments)
Verifica que los artículos no estén duplicados por articleID antes de crear, de estar duplicados crea los no duplicados y responde con un detalle de lo que por estar duplicado no pudo crearse.

#### **📍 POST | /articlefinder **

Busca artículos por propiedades id(db) y articleID(proveedor). Funciona solo con querys:
Ej: articleID . http://localhost:3001/articlefinder?articleID=J5558
Ej: id . http://localhost:3001/articlefinder?id=14
Devuelve un error si el artículo buscado no existe

#### **📍 GET | /articles **
Si no recibe querys trae todos los artículos activos en la DB.
La ruta funciona con querys autogeneradas, no espera que se le pasen valores para paginar. El aumento de páginas está seteado de 12 en 12 artículos y asimismo disminuye de 12 en 12 artículos.
Puede recibir la query order(asc/desc) para ordenar por precio en forma ascendente o descendente.


#### **📍 POST | /articles **

Espera un body con las siguientes propiedades como necesarias { articleID(string), name(string/80 caract), price(number), gender('Male', 'Female', 'Unisex'), color ('White', 'Black', 'Red', 'Green', 'Yellow', 'Brown', 'Orange', 'Blue', 'Grey', 'Pink', 'Violet'), image(string), type('Tshirt', 'sweatshirt', 'jacket', 'pant', 'accesories', 'shoes', 'equipment'), active(boolean) }

La propiedad brand recibe un string, por default "this product has no brand".
La propiedad description recibe un string, por default "this product has no description".
Las propiedades size y shoeSize pueden ser declaradas, por default se declaran con todos los valores en 0, ej:
size: { XS:0, S: 0, M: 0, L: 0, XL: 0, U:0 },
shoeSize: {35: 0,36: 0, 37: 0, 38: 0, 39: 0, 40: 0, 41: 0, 42: 0, 43: 0, 44: 0, 45: 0, 46: 0,},

Propiedades Rating y comments se generan en null.

#### **📍 PUT | /articles **

Modifica las propiedades de un artículo (excepto la propiedad active). 
Recibe los nuevos valores por body, puede modificar una o varias a la vez.
Debe incluir la propiedad id para identificar el artículo y active especificando si el artículo está activo o no.

Puede modificar las propiedades rating (number array) y comments (string array), de a una o ambas a la vez.
Ej. body: {
  "id": 3,
  "rating": [5]
  "comments": ["Super abrigada"],
  "active": true
}

#### **📍 PUT | //articles/:id **

Modifica la propiedad active de un artículo. Recibe por param el id del artículo y por body la propiedad active(false/true).

#### **📍 GET | /user **

Si no recibe query busca todos los usuarios activos (perfiles user y admin). Ej: http://localhost:3001/user
Puede recibir alternativamente o conjuntas las query rol (user, admin) y active (false, true)
Con query rol - busca los usuarios activos por rol, por Ej: http://localhost:3001/user?rol=admin
Con query active se puede acceder a los usuarios desactivados (active:false), se puede usar combinada con rol:
Ej: http://localhost:3001/user?rol=admin&active=false
Ej: http://localhost:3001/user?active=false

#### **📍 POST | /user **

Espera un body con las siguientes propiedades como necesarias { name: string, lastname: string, email: string(255), password: string(15), adress: string(50), city: string(20), rol: string(User/Admin), active: boolean}

Puede incluir la propiedad avatar que recibe una URL, tiene una imagen genérica seteada.

#### **📍 PUT | /user **

Modifica las propiedades de un usuario (excepto la propiedad active). 
Recibe los nuevos valores por body, puede modificar una o varias a la vez.
Debe incluir la propiedad id para identificar el artículo y active especificando si el usuario está activo o no.

#### **📍 PUT | //user/:id **

Modifica la propiedad active de un user. Recibe por param el id del user y por body la propiedad active(false/true).
