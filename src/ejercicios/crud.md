# Referencia al cocument

const usuariosRef = db.collection("usuarios");

# Objeto

const usuario = {
nombre: "Susana",
activo: true,
fechaNaci: 0,
salario: 1950,
};

# Insert into usuarios...

db.collection("usuarios")
.add(usuario)
.then((docRef) => {
console.log(docRef);
})
.catch((e) => console.log("error", e));

usuariosRef.add(usuario)

# Actualizar dato de usuarios...

usuariosRef.doc("32oT1OHv30MiZrAY8Ewj").update({ activo: false });

# Set data, mutacion del usuario, deja solo lo que agregamos aqui...

usuariosRef.doc("32oT1OHv30MiZrAY8Ewj").set({ activo: true, edad: 44 });

# Borrar usuario

usuariosRef.doc("32oT1OHv30MiZrAY8Ewj").delete();

# select \* from usuarios

usuariosRef.onSnapshot(retornaDocumentos);

usuariosRef.get().then(retornaDocumentos);

# select \* from usuarios

# Where activo = true

usuariosRef.where("activo", "==", true).get().then(retornaDocumentos);

# select \* from usuarios

# Where salario > 1800

usuariosRef.where("salario", ">", 1800).get().then(retornaDocumentos);

# select \* from usuarios

# Where salario > 1800 and salario < 2300

usuariosRef
.where("salario", ">", 1800)
.where("salario", "<", 2300)
.get()
.then(retornaDocumentos);

# select \* from usuarios

# Where salario > 1800 and activo = true

usuariosRef
.where("salario", ">", 1800)
.where("activo", "==", true)
.get()
.then(retornaDocumentos);
