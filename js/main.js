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
    this.Grd3 = {};
    this.Grd6 = {};
};

function Students(data) {
    this.text = [];
    this.students = [];
    
    this.splitter = function(data){
        var dist = data.split("\n");
        for(var line in dist){
            dist[line] = dist[line].split(",");
        };
        this.text = dist;
    };
    this.splitter(data);
    
    this.creator = function(){
        for (var student = 1; student < this.text.length; student++){
        var pupil = new Student(this.text[student][0], this.text[student][1]+this.text[student][2]);
        this.students.push(pupil);
        };
    };
    this.creator();
    console.log(this.students[0].name[0]);
    
}