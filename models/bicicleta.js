var Bicicleta = function(id, color, modelo, ubicacion){
    this.id=id;
    this.color= color;
    this.modelo= modelo;
    this.ubicacion= ubicacion;
}

Bicicleta.prototype.toString = function(){
    return 'id: ' + this.id + " | color: " + this.color;
}

Bicicleta.allBicis=[];
Bicicleta.add= function(aBici){
    Bicicleta.allBicis.push(aBici);
}

Bicicleta.findById= function(aBiciId){
    var aBici= Bicicleta.allBicis.find(x=>x.id == aBiciId);
    if(aBici)
       return aBici;
    else
      throw new Error(`No existe la bicicleta con el Id ${aBiciId}`)
}

Bicicleta.removeById = function(aBiciId){
    for (let index = 0; index < Bicicleta.allBicis.length; index++) {
        if(Bicicleta.allBicis[index].id==aBiciId){
            Bicicleta.allBicis.splice(index,1);
            break;
        }
        
    }
}

var a= new Bicicleta(1,'rojo','urbana',[45.5, -0.09]);
var b= new Bicicleta(2,'verde','urbana',[43.5, -0.09]);

Bicicleta.add(a);
Bicicleta.add(b);

module.exports= Bicicleta;