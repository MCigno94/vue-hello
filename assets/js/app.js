/* 
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 */

// Dichiaro il container nella quale verra instanziato vue
const app = new Vue({
    el: '#app',
    // Stampo a schermo un messaggio all’interno di un h1, utilizzando i data
    data: {
        title: 'Buongiorno!',
        style_title: 'title',
        image: './img/alba.jpg'
    }
})