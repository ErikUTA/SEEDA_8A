const validar = () => {
    document.getElementById('alerts').innerHTML = '';
    var rfc = document.getElementById('rfc');
    var nombre = document.getElementById('nombre');
    var sueldo = document.getElementById('sueldo');
    var horas = document.getElementById('horas');
    var empleados = document.getElementById('empleados');
    var number = Number.parseFloat(sueldo.value);
    var numberH = Number.parseInt(horas.value);
    var decimal = new RegExp("/^\d*\.?\d*$/");
    var numeros = /^[0-9]+$/;
    var reg = new RegExp("^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$"); 
    var reg2 = new RegExp('^[A-Z]+$', 'i');
    var l1 = false;
    var l2 = false;
    if(empleados.value.length === 8){
        if(empleados.value.slice(2,8).match(numeros)){
            l1 = true;
        }else{
            l1 = false;
        }
        if(reg2.test(empleados.value.slice(0,2))){
            l2 = true;
        }else{
            l2 = false;
        }
        if(l1 === true && l2 === true){
            document.getElementById('alerts5').innerHTML = '<div class="alert alert-success alert-dismissible fade show d-flex col-12 p-1 mt-3" role="alert"><p class="col-10"style="display: flex; justify-content: center; align-items: center; height: 100%; margin: 0;">El numero de empleado es correcto</p><div class="col-2" style="display: flex; justify-content: center; align-items: center;"><buttontype="button" class="btn-success" data-dismiss="alert" aria-label="Close"style="width: 25px; height: 25px; background: transparent; color: green; border: none;"><strong>X</strong></button></div></div>';
        }else{
            document.getElementById('alerts5').innerHTML = '<div class="alert alert-warning alert-dismissible fade show d-flex col-12 p-1 mt-3" role="alert"><p class="col-10"style="display: flex; justify-content: center; align-items: center; height: 100%; margin: 0;">El numero de empleado es incorrecto</p><div class="col-2" style="display: flex; justify-content: center; align-items: center;"><buttontype="button" class="btn-danger" data-dismiss="alert" aria-label="Close"style="width: 25px; height: 25px; background: transparent; color: red; border: none;"><strong>X</strong></button></div></div>';
        }
    }else{
        document.getElementById('alerts5').innerHTML = '<div class="alert alert-warning alert-dismissible fade show d-flex col-12 p-1 mt-3" role="alert"><p class="col-10"style="display: flex; justify-content: center; align-items: center; height: 100%; margin: 0;">El minimo de caracteres es 8</p><div class="col-2" style="display: flex; justify-content: center; align-items: center;"><buttontype="button" class="btn-danger" data-dismiss="alert" aria-label="Close"style="width: 25px; height: 25px; background: transparent; color: red; border: none;"><strong>X</strong></button></div></div>'; 
    }
    if(nombre.value.match(reg)){
        document.getElementById('alerts4').innerHTML = '<div class="alert alert-success alert-dismissible fade show d-flex col-12 p-1 mt-3" role="alert"><p class="col-10"style="display: flex; justify-content: center; align-items: center; height: 100%; margin: 0;">El nombre es correcto</p><div class="col-2" style="display: flex; justify-content: center; align-items: center;"><buttontype="button" class="btn-success" data-dismiss="alert" aria-label="Close"style="width: 25px; height: 25px; background: transparent; color: green; border: none;"><strong>X</strong></button></div></div>';
    }else{
        document.getElementById('alerts4').innerHTML = '<div class="alert alert-warning alert-dismissible fade show d-flex col-12 p-1 mt-3" role="alert"><p class="col-10"style="display: flex; justify-content: center; align-items: center; height: 100%; margin: 0;">El nombre es incorrecto</p><div class="col-2" style="display: flex; justify-content: center; align-items: center;"><buttontype="button" class="btn-danger" data-dismiss="alert" aria-label="Close"style="width: 25px; height: 25px; background: transparent; color: red; border: none;"><strong>X</strong></button></div></div>';
    }
    if(number < 5186.10) {
        document.getElementById('alerts2').innerHTML = '<div class="alert alert-warning alert-dismissible fade show d-flex col-12 p-1 mt-3" role="alert"><p class="col-10"style="display: flex; justify-content: center; align-items: center; height: 100%; margin: 0;">El sueldo es menor a 5186.10</p><div class="col-2" style="display: flex; justify-content: center; align-items: center;"><buttontype="button" class="btn-danger" data-dismiss="alert" aria-label="Close"style="width: 25px; height: 25px; background: transparent; color: red; border: none;"><strong>X</strong></button></div></div>';
    }else if(number > 36302.70){
        document.getElementById('alerts2').innerHTML = '<div class="alert alert-warning alert-dismissible fade show d-flex col-12 p-1 mt-3" role="alert"><p class="col-10"style="display: flex; justify-content: center; align-items: center; height: 100%; margin: 0;">El sueldo es mayor a 36302.70</p><div class="col-2" style="display: flex; justify-content: center; align-items: center;"><buttontype="button" class="btn-danger" data-dismiss="alert" aria-label="Close"style="width: 25px; height: 25px; background: transparent; color: red; border: none;"><strong>X</strong></button></div></div>';
    }else if(number > 5186.10 || number < 36302.70){
        document.getElementById('alerts2').innerHTML = '<div class="alert alert-success alert-dismissible fade show d-flex col-12 p-1 mt-3" role="alert"><p class="col-10"style="display: flex; justify-content: center; align-items: center; height: 100%; margin: 0;">El sueldo es correcto</p><div class="col-2" style="display: flex; justify-content: center; align-items: center;"><buttontype="button" class="btn-success" data-dismiss="alert" aria-label="Close"style="width: 25px; height: 25px; background: transparent; color: green; border: none;"><strong>X</strong></button></div></div>';
    }
    if(numberH < 8) {
        document.getElementById('alerts').innerHTML = '<div class="alert alert-warning alert-dismissible fade show d-flex col-12 p-1 mt-3" role="alert"><p class="col-10"style="display: flex; justify-content: center; align-items: center; height: 100%; margin: 0;">Las horas son menores a 8</p><div class="col-2" style="display: flex; justify-content: center; align-items: center;"><buttontype="button" class="btn-danger" data-dismiss="alert" aria-label="Close"style="width: 25px; height: 25px; background: transparent; color: red; border: none;"><strong>X</strong></button></div></div>';
    }else if(numberH > 16){
        document.getElementById('alerts').innerHTML = '<div class="alert alert-warning alert-dismissible fade show d-flex col-12 p-1 mt-3" role="alert"><p class="col-10"style="display: flex; justify-content: center; align-items: center; height: 100%; margin: 0;">Las horas son mayores a 16</p><div class="col-2" style="display: flex; justify-content: center; align-items: center;"><buttontype="button" class="btn-danger" data-dismiss="alert" aria-label="Close"style="width: 25px; height: 25px; background: transparent; color: red; border: none;"><strong>X</strong></button></div></div>';
    }else if(numberH > 7 || numberH < 17){
        document.getElementById('alerts').innerHTML = '<div class="alert alert-success alert-dismissible fade show d-flex col-12 p-1 mt-3" role="alert"><p class="col-10"style="display: flex; justify-content: center; align-items: center; height: 100%; margin: 0;">Las horas son correctas</p><div class="col-2" style="display: flex; justify-content: center; align-items: center;"><buttontype="button" class="btn-success" data-dismiss="alert" aria-label="Close"style="width: 25px; height: 25px; background: transparent; color: green; border: none;"><strong>X</strong></button></div></div>';
    }
    ValidaRfc(rfc);
}

function ValidaRfc(rfcStr) {
	var strCorrecta = rfcStr.value;
	if (rfcStr.value.length == 12){
		strCorrecta = ' ' + rfcStr.value;
	}else{
		strCorrecta = rfcStr.value;
	}
	var valid = '^(([A-Z]|[a-z]|\s){1})(([A-Z]|[a-z]){3})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))';
	var validRfc=new RegExp(valid);
	var matchArray=strCorrecta.match(validRfc);
	if (matchArray==null) {
		document.getElementById('alerts3').innerHTML = '<div class="alert alert-warning alert-dismissible fade show d-flex col-12 p-1 mt-3" role="alert"><p class="col-10"style="display: flex; justify-content: center; align-items: center; height: 100%; margin: 0;">El RFC es incorrecto</p><div class="col-2" style="display: flex; justify-content: center; align-items: center;"><buttontype="button" class="btn-danger" data-dismiss="alert" aria-label="Close"style="width: 25px; height: 25px; background: transparent; color: red; border: none;"><strong>X</strong></button></div></div>';
	}else{
		document.getElementById('alerts3').innerHTML = '<div class="alert alert-success alert-dismissible fade show d-flex col-12 p-1 mt-3" role="alert"><p class="col-10"style="display: flex; justify-content: center; align-items: center; height: 100%; margin: 0;">El RFC es correcto</p><div class="col-2" style="display: flex; justify-content: center; align-items: center;"><buttontype="button" class="btn-success" data-dismiss="alert" aria-label="Close"style="width: 25px; height: 25px; background: transparent; color: green; border: none;"><strong>X</strong></button></div></div>';
	}
}