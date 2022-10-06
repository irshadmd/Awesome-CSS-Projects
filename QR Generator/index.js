const qr = document.querySelector(".qr");
const image = qr.querySelector(".image img");
const btn = qr.querySelector(".btn");
const inputval = qr.querySelector(".input");
const pval = qr.querySelector(".container p");




btn.addEventListener("click", ()=>{

	let invalue = inputval.value;
	
	btn.innerText="Generating...";
	if(!inputval.value) {
		pval.innerText="Please Enter the text";
		btn.innerText="Generate QR Code";

	}

	image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${invalue}`;
	// console.log(inputval.value);

	image.addEventListener("load" , ()=>{
		qr.classList.add("active");
		btn.innerText="Generate QR Code"
	})

	// image.addEventListener("load" , ()=>{

	// }

})

inputval.addEventListener("keyup", ()=>{
	if(!inputval.value)
	{
		qr.classList.remove("active");

	}
})