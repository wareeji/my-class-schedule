const data = [
    {id:1 ,Code:'CPE363' ,title:'APPLICATION DEVELOPMENT'         ,Credit:'3' ,Section:'03' ,Date:'Thursday'  ,Time:'13:00-16:50  ' ,Room: '5-311'},
    {id:2 ,Code:'CPE419' ,title:'COMPUTER OPERATING SYSTEMS'      ,Credit:'3' ,Section:'01' ,Date:'Wednesday' ,Time:'12:00-14:50  ' ,Room: '5-355'},
    {id:3 ,Code:'CPE426' ,title:'COMPUTER NETWORKS'               ,Credit:'3' ,Section:'01' ,Date:'Monday'    ,Time:'09:30-11:50  ' ,Room: '5-355'},
    {id:4 ,Code:'CPE427' ,title:'COMPUTER NETWORKS LABORATORY'    ,Credit:'1' ,Section:'12' ,Date:'Thursday'  ,Time:'09:00-11:50  ' ,Room: '5-311'},
    {id:5 ,Code:'CPE441' ,title:'SYSTEM AND SOFTWARE ENGINEERING' ,Credit:'3' ,Section:'01' ,Date:'Tuesday'   ,Time:'13:00-15:50  ' ,Room: '5-432'},
    {id:6 ,Code:'CPE499' ,title:'NODE.JS'                         ,Credit:'3' ,Section:'01' ,Date:'Monday'    ,Time:'13:00-15:50  ' ,Room: '5-311'},
    {id:7 ,Code:'CSC350' ,title:'WEB PROGRAMMING'                 ,Credit:'3' ,Section:'03' ,Date:'Tuesday'   ,Time:'09:00-12:50  ' ,Room: '6-A508'}

];

function getAll()
{
    return Promise.resolve(data);
}

module.exports = getAll;