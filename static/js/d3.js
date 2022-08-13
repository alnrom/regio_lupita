let mapa = d3.select("#map_container");
let ubica = d3.select("#ubicacion");
let map_show = false;
let bd = d3.select("body");
let product_link = d3.select("#productos");
let product_pics = d3.select("#carousel")
let pic1 = d3.select("#foto-empanadas-horno")
let pic2 = d3.select("#foto-empanadas-nuez")
let prodpics_show = false;


ubica.on("click", ubicacionClick);
ubica.on("mouseover", ubicaOver);
ubica.on("mouseout", ubicaOut);

function ubicacionClick(){
    if (map_show === false) {
        mapa.style('display', 'block')
        map_show = true
        product_pics.style('display', 'none')
        prodpics_show = false
        }
        else {
                mapa.style('display','none')
                map_show = false
            };
} ;

function ubicaOver(){ 
    ubica.style("cursor","pointer"); 
    ubica.style("color", "blue");
};

function ubicaOut(){ 
    ubica.style("color", "rgb(117, 142, 187)");
};

bd.on("click", bodyClick)

function bodyClick(){
    if (mapa.style.display === "block") {
        mapa.style('display', 'none');
    }
}

product_link.on("click", prpicsClick);

function prpicsClick(){
    if (prodpics_show === false) {
        product_pics.style('display', 'block')
        prodpics_show = true
        mapa.style('display','none')
        map_show = false
        
        }
        else {
                product_pics.style('display','none')
                prodpics_show = false
            };
} ;

product_link.on("mouseover", product_linkOver);
product_link.on("mouseout", product_linkOut);

function product_linkOver(){ 
    product_link.style("cursor","pointer"); 
    product_link.style("color", "blue");
};

function product_linkOut(){ 
    product_link.style("color", "rgb(117, 142, 187)");
};

// let hor_move = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
let left_move = [10, 10];

let right_move = [10, 10];



function moveSide() {
    d3.selectAll('svg')
        .selectAll('text')
        .data(left_move)
        .join('text')
        .attr('y', 86)
        .transition()
        .duration(2000)
        .attr('x', function(d){
                return d;
        });
}


function updateAll() {
    moveSide();
};

updateAll();



