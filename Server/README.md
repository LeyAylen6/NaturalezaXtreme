API Endpoints documentación:

#### **📍 POST | /bulkArticles **

Utiliza assets.js para hacer un bulk engit la base de datos de artículos hardcodeados en un array de objetos (que deben respetar el formato de la interface articleStructure.ts con la salvedad de que pueden no tener las propiedades que están como "nullable: true" en articleEntity.ts: size, shoeSize, brand, description, rating y comments)
Verifica que los artículos no estén duplicados por articleID antes de crear, de estar duplicados crea los no duplicados y responde con un detalle de lo que por estar duplicado no pudo crearse.

#### **📍 POST | /articles **

Espera un body con las siguientes propiedades como necesarias { articleID(string), name(string/80 caract), price(number), gender('Male', 'Female', 'Unisex'), color ('White', 'Black', 'Red', 'Green', 'Yellow', 'Brown', 'Orange', 'Blue', 'Grey', 'Pink', 'Violet'), image(string), type('Tshirt', 'sweatshirt', 'jacket', 'pant', 'accesories', 'shoes', 'equipment'), active(boolean) }

La propiedad brand recibe un string, por default "this product has no brand".
La propiedad description recibe un string, por default "this product has no description".
Las propiedades size y shoeSize pueden ser declaradas, por default se declaran con todos los valores en 0, ej:
size: { XS:0, S: 0, M: 0, L: 0, XL: 0, U:0 },
shoeSize: {35: 0,36: 0, 37: 0, 38: 0, 39: 0, 40: 0, 41: 0, 42: 0, 43: 0, 44: 0, 45: 0, 46: 0,},

Propiedades Rating y comments se generan en null.

#### **📍 GET | /user **

Si no recibe query busca todos los usuarios activos (perfiles user y admin). Ej: http://localhost:3001/user
Puede recibir alternativamente o conjuntas las query rol (user, admin) y active (false, true)
Con query rol - busca los usuarios activos por rol, por Ej: http://localhost:3001/user?rol=admin
Con query active se puede acceder a los usuarios desactivados con false, se puede usar combinada con rol o no:
Ej: http://localhost:3001/user?rol=admin&active=false
Ej: http://localhost:3001/user?active=false
Responde con error de no haber coincidencias con la búsqueda



#### **📍faltan documentar **

FALTAN DOCUMENTAR:
router.get('/articlefinder', getArticleById)
router.get('/articles', getArticles)
router.put('/articles', updateArticle)
router.put('/articles/:id', desactivateArticle)

router.post('/user', postUser)
router.get('/user', getUsers)
router.get('/user/:id', getUserById)
router.put('/user', updateUser)
router.put('/user/:id', desactivateUser)

