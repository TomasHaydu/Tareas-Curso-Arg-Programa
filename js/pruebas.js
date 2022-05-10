function probarValidarNombre() {
  console.assert(
      validarNombre(0) === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );
  console.assert(
    validarNombre("") === 'Este campo debe tener al menos 1 caracter',
    'Validar nombre no validó que el nombre no sea vacío',
);

  console.assert(
      validarNombre(
          'shdfgihsadfugbsaudfloghiusihgifldohguaoihfdguladosfguolahfdshghsidfghaiudfhgihafdsgadfsgulosihguflhadgiadfilghuafdiguadfgiauhfdgulaosig') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
      validarNombre("ca7riel") === 'Este campo debe contener solo letras',
      'Validar nombre falló con un nombre que contiene letras'
  )

  console.assert(
      validarNombre('Fabricio') === '',
      'Validar nombre falló con un nombre valido',
  );
}
probarValidarNombre();


function probarValidarCiudad(){
    console.assert(
        validarCiudad("") === 'Este campo esta incompleto',
        'Validar ciudad no validó que el campo ciudad no sea vacio'
    );
    console.assert(
        validarCiudad('Buenos Aires') == "",
        'Validar ciudad no falló al poner un string vacio'
    );
}
probarValidarCiudad()

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter',
        'Validar descripcion regalo no validó que la descripcion no sea vacío',
    );
  
    console.assert(
        validarDescripcionRegalo(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar descripcion regalo no validó que la descrpcion sea menor a 50 caracteres',
    );

    console.assert(
        validarDescripcionRegalo('.,,.,.,,..') === 'Este campo solo debe tener numeros y letras',
        'Validar descripcion regalo falló con una descripcion que no contiene numeros ni letras'
    )
}
probarValidarDescripcionRegalo()