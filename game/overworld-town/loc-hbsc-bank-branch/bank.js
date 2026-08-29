function bankOpen() {
    return Time.hour >= 6 && Time.hour < 21;
}
window.bankOpen = bankOpen;

function checkCreditStatus() {
    if (!V.hbsc){
        V.hbsc = {};
        V.hbsc.account = {};

        V.hbsc.saving = {};

        V.hbsc.deposit = {};

        V.hbsc.loan = {};
        V.hbsc.loan.paydate = {}
        V.hbsc.loan.pay = {};
    }
}

function recordLoan(amount,type,lastpay) {
    const int = V.hbsc.loan.interest;

    const term1 = V.hbsc.loan.pay.first;
    const term2 = V.hbsc.loan.pay.second;
    const term3 = V.hbsc.loan.pay.third;
    const term4 = V.hbsc.loan.pay.last;

    V.hbsc.loan.base = amount;

    if (type === "term") {
        term1 = Math.round(amount/4)
        term2 = Math.round(amount/4 + amount*int/8)
        term3 = Math.round(amount/4 + amount*int*3/16)
        term4 = Math.round(amount/4 + amount*int)
        V.hbsc.loan.pay.final = term1 + term2 + term3 + term4

    } else if (type = "full") {
        V.hbsc.loan.paydate = Time.days + lastpay
    }
}