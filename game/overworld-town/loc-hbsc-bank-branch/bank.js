function bankOpen() {
    return Time.hour >= 6 && Time.hour < 21;
}
window.bankOpen = bankOpen;

