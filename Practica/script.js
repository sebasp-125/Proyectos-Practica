
const __login = document.getElementById('__login')
const __nombre = document.getElementById('__nombre')
const __contrasena = document.getElementById('__contrasena')

console.log(".........")

const URL =  "http://localhost:3000/base"

__login.addEventListener('click' , async () => {
    console.log("Entro al __login" , true)
    try {
        console.log("JSON a enviar al servidor:", {
            __nombre: __nombre.value,
            __contrasena: __contrasena.value
        });

        const response = await axios.post(URL , {
             id: crypto.randomUUID(),
             __nombre : __nombre.value ,
             __contrasena : __contrasena.value
        });

        console.log("Conectados...")
        console.log(response.base)

    } catch (Error){
        console.error(Error)
    }
})