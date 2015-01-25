if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

window.onload = function() {
    var fileInput = document.getElementById('fileInput');
                
    fileInput.addEventListener('change', function(e) {
        
        var file = fileInput.files[0];
         
        var reader = new FileReader();

        reader.onload = function(e) {
                                    
            data = reader.result;
            //console.log(data);
            var myStudents = new Students(data);
                                        
	};

	reader.readAsText(file);	
                               
			
	});
};

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
            }
        }
    };
    this.splitter = function(data){
        var Iist = data.split("\n");
        Iist.shift();
        for(var line in Iist){
            Iist[line] = Iist[line].split(",");
        };
        return Iist;
    };
    
    this.creator = function(){
        for (var student = 1; student < this.text.length; student++){
        var pupil = new Student(this.text[student][0], this.text[student][1]+this.text[student][2]);
        this.students.push(pupil);
        };
    };
    this.creator();
    console.log(this.students[0].name[0]);
    
}