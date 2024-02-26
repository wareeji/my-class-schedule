function render(myclasses) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Waree's ClassSchedule</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>        
        <h1> 6400823 Waree Jinanun's Class Schedule </h1>
        <table>
            <th>#</th>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Credit</th>
            <th>Section</th>
            <th>Date</th>
            <th>Time</th>
            <th>Room</th>
            ${myclasses
            .map((myclass) =>
                `<tr>
                    <td>${myclass.id}</td>
                    <td>${myclass.Code}</td>
                    <td>${myclass.title}</td>
                    <td>${myclass.Credit}</td>
                    <td>${myclass.Section}</td>
                    <td>${myclass.Date}</td>
                    <td>${myclass.Time}</td>
                    <td>${myclass.Room}</td>
                </tr>`
            )
            .join('')
        }
        </table>    
    </body>
    </html>
    `
};

module.exports = render;