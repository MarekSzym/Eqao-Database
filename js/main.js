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
            console.log(data);
            var myStudents = new Students(data);
                                        
	};

	reader.readAsText(file);	
                               
			
	});
};

function Student(OEN){
    this.OEN = OEN;
    this.Grd3 = {};
    this.Grd6 = {};
};

function Students(data) {
    this.data = data;
    this.text = [];
    
    this.splitter = function(data){
        var 1ist = data.split("\n")
        console.log(1ist)
    };
}