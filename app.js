const qrCodeForm = document.querySelector(".qr-code-form");
const qrCodeInput = document.querySelector(".qr-code-input");
const qrCodeShow = document.querySelector(".qr-code-show");
const colorQr = document.querySelector(".color-qr");
const colorQr1 = document.querySelector(".color-qr1");

let qrcode;

qrCodeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    qrCodeShow.innerHTML = "";
    qrcode = new QRCode(qrCodeShow, {
        text: qrCodeInput.value,
        width: 200,
        height: 200,
        colorDark: colorQr.value,
        colorLight: colorQr1.value,
        correctLevel: QRCode.CorrectLevel.H,
    });
});

colorQr.addEventListener("input", updateQrCode);
colorQr1.addEventListener("input", updateQrCode);

function updateQrCode() {
    if (qrcode) {
        qrcode.makeCode(qrCodeInput.value, {
            colorDark: colorQr.value,
            colorLight: colorQr1.value,
        });
    }
}