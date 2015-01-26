if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

//window.onload = function() {
//    var fileInput = document.getElementById('fileInput');
//                
//    fileInput.addEventListener('change', function(e) {
//        
//        var file = fileInput.files[0];
//         
//        var reader = new FileReader();
//
//        reader.onload = function(e) {
//                                    
//            data = reader.result;
//            //console.log(data);
//            var myStudents = new Students(data);
//                                        
//	};
//
//	reader.readAsText(file);	
//                               
//			
//	});
//};

function Student(OEN, name){
    this.OEN = OEN;
    this.name = name;
    this.gender = true;
    this.IEP = false;
    this.Grd3 = [];
    this.Grd6 = [];
    this.Grd9 = [];
};

function Database() {
    this.OENS = [];
    this.students = [];
    
    this.addFile = function(data, grade){
        var Iist = this.splitter(data);
        for (var pupil = 0; pupil<Iist.length; pupil++){
            if(this.OENS.indexOf(Iist[pupil][0]) < 0){
                var newPupil = new Student(Iist[pupil][0], Iist[pupil][1] + Iist[pupil][2])
                this.OENS.push(Iist[pupil][0])
                switch(grade){
                    case 3:
                        newPupil.Grd3 = Iist[pupil].slice(5,11);
                        break;
                    case 6:
                        newPupil.Grd6 = Iist[pupil].slice(5,11);
                        break;
                    case 9:
                        newPupil.Grd9 = Iist[pupil].slice(5,11);
                        break;
                    default:
                        alert("Something messed up");
                        break;
                }
                if(Iist[pupil][4]=== 'x'){newPupil.IEP = true;}
                if(Iist[pupil][3]=== 'F'){newPupil.gender = false;}
                this.students.push(newPupil);
            }else{
                var index = this.search(Iist[pupil][0]);
                switch(grade){
                    case 3:
                        this.students[index].Grd3 = Iist[pupil].slice(5,11);
                        break;
                    case 6:
                        this.students[index].Grd6 = Iist[pupil].slice(5,11);
                        break;
                    case 9:
                        this.students[index].Grd9 = Iist[pupil].slice(5,11);
                        break;
                    default:
                        alert("Something messed up");
                        break;
                }
            }
        }
    console.log(this.students);    
    };
    this.splitter = function(data){
        var Iist = data.split("\n");
        Iist.shift();
        for(var line in Iist){
            Iist[line] = Iist[line].split(",");
        };
        return Iist;
    };
    
    this.search = function(OEN){
        for(var pupil = 0; pupil< this.students.length; pupil++){
            if(this.students[pupil].OEN === OEN){
                return pupil;
            }
        }
    }
    
    this.filter = function(grade, item,sign, value){
        var filteredStudents = [];
        for(var pupil = 0; pupil < this.students.length; pupil++){
            if(sign===0){
                if (grade === 3){
                    if(this.students[pupil].Grd3[item] < value){filteredStudents.push(this.students[pupil])}
                }
                if (grade === 6){
                    if(this.students[pupil].Grd6[item] < value){filteredStudents.push(this.students[pupil])}
                }
                if (grade === 9){
                    if(this.students[pupil].Grd9[item] < value){filteredStudents.push(this.students[pupil])}
                }
            }else{
                if (grade === 3){
                    if(this.students[pupil].Grd3[item] > value){filteredStudents.push(this.students[pupil])}
                }
                if (grade === 6){
                    if(this.students[pupil].Grd6[item] > value){filteredStudents.push(this.students[pupil])}
                }
                if (grade === 9){
                    if(this.students[pupil].Grd9[item] > value){filteredStudents.push(this.students[pupil])}
                }
            }
        }
    };
}
var myDataBase = new Database();

function handleSubmitButton(){
    var fileInput = document.getElementById('fileInput');
    var grade = document.getElementById('grdSelector');
        
    var file = fileInput.files[0];
         
    var reader = new FileReader();

    reader.onload = function(){
                                    
            data = reader.result;
            myDataBase.addFile(data, parseInt(grade.options[grade.selectedIndex].value))
                                        
	};

    reader.readAsText(file);			
};    

function handleAddFilterButton(){
    
}

window.onload = init;

function init(){
    var submitButton = document.getElementById('submitFile');
    submitButton.onclick = handleSubmitButton;
    
    var addFilterButton = document.getElem
}
