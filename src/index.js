function VerifyDate() {
    var num = ["01", "02", "03", "04", "05", "06", "07", "08", "09"]
    var nowYear = new Date().getFullYear()
    var nowMonth = new Date().getMonth()
    var nowDate = new Date().getDate();
    if (nowMonth < 10) {
        var nowMonthStr = num[nowMonth];
    } else {
        var nowMonthStr = nowMonth + ""
    }
    if (nowDate < 10) {
        var nowDateStr = num[nowDate];
    } else {
        var nowDateStr = nowDate + "";
    }
    var nowYearStr = nowYear + "";
    var DateStr = nowYearStr + "-" + nowMonthStr + "-" + nowDateStr
    var maxDateStr = (parseInt(nowYearStr) + 1) + "-" + nowMonthStr + "-" + nowDateStr
    document.getElementById("txtDate").value = DateStr;
    document.getElementById("txtDate").min = DateStr;
    document.getElementById("txtDate").max = maxDateStr;
}
function VerifyName() {
    var VerifyName = /[a-zA-Z ]{2,100}/
    var Name = document.getElementById("txtName").value;
    if (Name.match(VerifyName) != Name) {
        document.getElementById("msgName").innerHTML = "Please Enter Valid Name."
        document.getElementById("msgName").style.color = "red";
    } else {
        document.getElementById("msgName").innerHTML = ""
    }
}
function VerifyMobile() {
    var VerifyMob = /[6-9]{1}[0-9]{9}/
    var Mobile = document.getElementById("txtMobile").value;
    if (Mobile.match(VerifyMob) != Mobile) {
        document.getElementById("msgMobile").innerHTML = "Please Enter Valid Mobile Number."
        document.getElementById("msgMobile").style.color = "red";
    } else {
        document.getElementById("msgMobile").innerHTML = ""
    }
}
function VerifyDays() {
    var Days = document.getElementById("txtDays").value;
    if (Days.indexOf(".") != -1 || Days.indexOf("e") != -1) {
        alert("Only Numbers Are Allowed")
        document.getElementById("txtDays").value = "1"
    }
    else if (Days < 1 || Days > 30) {
        if (Days < 1) {
            alert("Days must be 1-30.")
            document.getElementById("txtDays").value = "1"
        } else if (Days > 30) {
            alert("Days must be 1-30.")
            document.getElementById("txtDays").value = "30"
        }
    }
}
function VerifyPerson() {
    var Person = document.getElementById("txtPerson").value;
    var VerifyNum = /[0-9]*/
    if (Person.indexOf(".") != -1 || Person.indexOf("e") != -1) {
        alert("Only Numbers Are Allowed")
        document.getElementById("txtPerson").value = "1"
    }
    else if (Person < 1 || Person > 5) {
        if (Person < 1) {
            alert("Person must be 1-5.")
            document.getElementById("txtPerson").value = "1"
        } else if (Person > 5) {
            alert("Persons must be 1-5.")
            document.getElementById("txtPerson").value = "5"
        }
    }
}
var GrossTotel = 0;
function bodyload() {
    var Advance = document.getElementById("txtAdvance").value;
    var Days = document.getElementById("txtDays").value;
    var Person = document.getElementById("txtPerson").value;
    var RoomType = "";
    var RoomCost = 0;
    var optDelux = document.getElementById("optDelux")
    var optSuite = document.getElementById("optSuite")
    if (optDelux.checked) {
        RoomType = "Delux";
        RoomCost = 2500;
    }
    if (optSuite.checked) {
        RoomType = "Suite";
        RoomCost = 4000;
    }
    var Amenitie = "";
    var optAc = document.getElementById("optAc");
    var optLocker = document.getElementById("optLocker").checked;
    if (optAc.checked) {
        Amenitie += "A/C" + "<br>";
        RoomCost += 1000
    }
    if (optLocker) {
        Amenitie += "Locker" + "<br>"
        RoomCost += 300
    }
    if (Amenitie == "") {
        Amenitie = "NA"
    }
    if (Person > 2) {
        var ExtraPerson = Person - 2;
        var ExtraCost = 1000 * ExtraPerson;
        GrossTotel = (RoomCost + ExtraCost) * Days;
    } else {
        GrossTotel = RoomCost * Days;
    }
    document.getElementById("txtAdvance").max = GrossTotel;
}
function VerifyAdvance() {
    var Advance = document.getElementById("txtAdvance").value;
    if (Advance.indexOf(".") != -1 || Advance.indexOf("e") != -1) {
        alert("Only Numbers Are Allowed.")
        document.getElementById("txtAdvance").value = GrossTotel;
    }
    else if (Advance < 500) {
        alert("Minimum Advance Amount is 500.")
        document.getElementById("txtAdvance").value = 500;
    }
    else if (Advance > GrossTotel) {
        alert("Advance Amount is must be less then Totel Amount")
        document.getElementById("txtAdvance").value = GrossTotel;
    }
}

function bookFormClick() {
    document.getElementById('bookNowPage').style.display = 'block';
    document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('rooms').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
}

function closeClick() {
    document.getElementById('bookNowPage').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    document.getElementById('about').style.display = 'block';
    document.getElementById('rooms').style.display = 'block';
    document.getElementById('contact').style.display = 'block';
}

function bookClick() {
    bodyload()
    var Name = document.getElementById("txtName").value;
    var VerifyName = /[a-zA-Z ]{2,100}/
    var Mobile = document.getElementById("txtMobile").value;
    var VerifyMob = /[6-9]{1}[0-9]{9}/
    var Date = document.getElementById("txtDate").value;

    var Days = document.getElementById("txtDays").value;
    var Person = document.getElementById("txtPerson").value;
    var RoomType = "";
    var RoomCost = 0;
    var optDelux = document.getElementById("optDelux")
    var optSuite = document.getElementById("optSuite")
    if (optDelux.checked) {
        RoomType = "Delux";
        RoomCost = 2500;

    }
    if (optSuite.checked) {
        RoomType = "Suite";
        RoomCost = 4000;
    }

    var Amenitie = "";
    var optAc = document.getElementById("optAc");
    var optLocker = document.getElementById("optLocker").checked;
    if (optAc.checked) {
        Amenitie += "A/C" + "<br>";
        RoomCost += 1000
    }
    if (optLocker) {
        Amenitie += "Locker" + "<br>"
        RoomCost += 300
    }
    if (Amenitie == "") {
        Amenitie = "NA"
    }
    var Advance = document.getElementById("txtAdvance").value;
    var Totel = 0;
    if (Name.trim() == "") {
        alert("Please Enter Customer Name.")
        document.getElementById("txtName").value = "";
    } else if (Mobile == "") {
        alert("Please Enter Mobile Number.")
    } else if (Date == "") {
        alert("Please Select Date.")
    } else if (Days == "") {
        alert("Please Enter Totel Number Of Days.")
    } else if (Person == "") {
        alert("Please Enter Number Of Persons.");
    } else if (Advance == "") {
        alert("Please Enter Advance Amount.")
    } else if (Name.match(VerifyName) != Name) {
        alert("Please Enter Valid Name.")
    } else if (Mobile.match(VerifyMob) != Mobile) {
        alert("Please Enter Valid Mobile Number.")
    } else if (Days <= 0) {
        alert("Please Enter Valid Totel Number of Days.")
    } else if (Person <= 0) {
        alert("Please Enter Valid Totel Number of Person.")
    } else if (Advance <= 0) {
        alert("Advance Amount can't be less then 0.")
    } else {
        document.getElementById("lblName").innerHTML = Name.trim().toUpperCase();
        document.getElementById("lblMobile").innerHTML = "+91 " + Mobile;
        var displayDate = Date.split("-")
        document.getElementById("lblDate").innerHTML = displayDate[2] + "-" + displayDate[1] + "-" + displayDate[0];
        document.getElementById("lblDays").innerHTML = Days;
        document.getElementById("lblPerson").innerHTML = Person;
        document.getElementById("lblRoom").innerHTML = RoomType;
        document.getElementById("lblAmenities").innerHTML = Amenitie;
        if (Person > 2) {
            var ExtraPerson = Person - 2;
            var ExtraCost = 1000 * ExtraPerson;
            GrossTotel = (RoomCost + ExtraCost) * Days;
        } else {
            GrossTotel = RoomCost * Days;
        }
        document.getElementById("lblGross").innerHTML = "&#8377; " + GrossTotel + "/-";
        document.getElementById("lblAdvance").innerHTML = "&#8377; " + Advance + "/-";
        document.getElementById("lblTotel").innerHTML = "&#8377; " + (GrossTotel - Advance) + "/-";
        alert('Your booking confirm');
        document.getElementById("txtName").value = "";
        document.getElementById("txtMobile").value = "";
        document.getElementById("txtDate").value = "";
        document.getElementById("txtDays").value = "";
        document.getElementById("txtPerson").value = "";
        document.getElementById("txtAdvance").value = "";
        if (document.getElementById("optSuite").checked) {
            document.getElementById("optSuite").checked = false;
            document.getElementById("optDelux").checked = true;
        }
        if (document.getElementById("optAc").checked) {
            document.getElementById("optAc").checked = false;
        }
        if (document.getElementById("optLocker").checked) {
            document.getElementById("optLocker").checked = false;
        }
        document.getElementById('bookNowPage').style.display = 'none';
        document.getElementById('bookNowBtn').style.display = 'none';
        document.getElementById('Preview').style.display = 'block';
        document.getElementById('home').style.display = 'block';
        document.getElementById('about').style.display = 'block';
        document.getElementById('rooms').style.display = 'block';
        document.getElementById('contact').style.display = 'block';
    }

}

function showModal(){
    document.querySelector('.modal-backdrop').style.display = 'none';
}