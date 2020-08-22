const imgUpload = document.getElementById("jsuploadFile");

imgUpload.addEventListener("change", function () {
  let fileList = imgUpload.files;

  let reader = new FileReader();
  reader.readAsDataURL(fileList[0]);

  reader.onload = function () {
    document.querySelector("#jsTumbnail").src = reader.result;
  };
});
