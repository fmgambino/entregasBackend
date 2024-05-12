// Arreglo de objetos (personas)
let personas = [
    { id: 1, nombre: 'Juan', edad: 25 },
    { id: 2, nombre: 'María', edad: 30 },
    { id: 3, nombre: 'Pedro', edad: 28 },
    { id: 4, nombre: 'Ana', edad: 22 },
    { id: 5, nombre: 'Carlos', edad: 35 }
];

// Utilizando el método "find" para buscar una persona por su ID
let personaId2 = personas.find(persona => persona.id === 2);
console.log(personaId2); // Output: { id: 2, nombre: 'María', edad: 30 }

// Utilizando el método "filter" para obtener personas mayores de 25 años
let personasMayores25 = personas.filter(persona => persona.edad > 25);
console.log(personasMayores25); // Output: [{ id: 2, nombre: 'María', edad: 30 }, { id: 3, nombre: 'Pedro', edad: 28 }, { id: 5, nombre: 'Carlos', edad: 35 }]

// Utilizando el método "some" para verificar si hay alguna persona menor de 18 años
let hayMenores18 = personas.some(persona => persona.edad < 18);
console.log(hayMenores18); // Output: false
