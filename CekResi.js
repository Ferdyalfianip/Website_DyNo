const btn = document.getElementById('search');
const courierKeyword = document.getElementById('courier_input');
const awbKeyword = document.getElementById('awb_input');

btn.addEventListener('click', function(){
    fetch('https://api.binderbyte.com/v1/track?api_key=12713d295bf149156fc8aef5a41b4cefabfb999c0ec82273d4dc53e30cc680a1&courier=' +
    courierKeyword.value + ('&awb=') + awbKeyword.value)
    
    .then(response => response.json())
    .then(result => {
        let output=`<h3>Hasil Tracking</h3>`;
        const post = result.data;
        console.log(post);
        //result.data.forEach((post) => {
            output += `
            <div>
            <table class= "table table-bordered">
            <tr>
            <td>
                <h6>POSISI PAKETMU</h6>
                ${post.history[0].date}<br>
                ${post.history[0].desc}
            </td>
            </tr>
            <tr>
                <td>
                    <h6>LAYANAN</h6>
                    ${post.summary.courier}
                </td>
            </tr>                           
            <tr>
                <td>
                    <h6>WAKTU</h6>
                    ${post.summary.date}
                </td>
            </tr>                           
            <tr>
                <td>
                    <h6>ASAL</h6>
                    ${post.detail.origin}
                </td>
            </tr>                           
            <tr>
                <td>
                    <h6>TUJUAN</h6>
                    ${post.detail.destination}
                </td>
            </tr>
            <tr>
                <td>
                    <h6>PENERIMA</h6> 
                    ${post.detail.receiver}
                </td>
            </tr>
            </table>
            </div>`
    //})
        document.getElementById('output').innerHTML = output;    
    })
})
