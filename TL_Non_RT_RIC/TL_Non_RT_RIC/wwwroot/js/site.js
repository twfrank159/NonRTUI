// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

var ControllerName = ""; // '/[Controller Name]'

function AjaxUpdate(Url, ElementID, IsID = true, callback, RspFunction) {
    $.ajax({
        url: Url,
        type: "Get",
        contentType: false,
        cache: false,
        processData: false,
        success: function (Response) {
            //alert(Response);
            callback(ElementID, IsID, Response, RspFunction );
        }, error: function (Response) {
            alert("errrrr");
            console.log('無法送出');
        }
    })
}

function AjaxPost(Url, SendData, ElementID, IsID = true, callback, RspFunction) {
    $.ajax({
        url: Url,
        type: "POST",
        data: SendData,
        contentType: false,
        cache: false,
        processData: false,
        success: function (Response) {
            if (callback != null) {
                callback(ElementID, IsID, Response, RspFunction);
            }
        }, error: function (Response) {
            alert("errrrr");
            console.log('無法送出');
        }
    })
}


function AjaxSendJSON(Url, SendData, ElementID, IsID = true, callback, RspFunction) {
    $.ajax({
        url: Url,
        type: "POST",
        data: SendData,
        type: "POST",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (Response) {
            if (callback != null) {
                callback(ElementID, IsID, Response, RspFunction);
            }
        }, error: function (Response) {
            //alert("errrrr");
            console.log('無法送出');
        }
    })
}

function GetParialView(ElementID, IsID, Response, RspFunction = null) {
    if (IsID) {
        $('#' + ElementID).html(Response);
    }
    else {
        $('.' + ElementID).html(Response);
    }
    //Set Response Element Function
    if (RspFunction != null) {
        RspFunction();
    }
}

class RApp {
    constructor(name, url) {
        this.name = 'Polygon';
        this.url = 'test Url';
    }
}

function initRic()
{
    ControllerName = "Home";
    var RicEleObjWidth = $(".RicEleObj").width();
    $(".RicObjList ").width(RicEleObjWidth * 8 / 10);
    LoadRApp();
    LoadKPI();
    LoadNearRIC();
    AddRapp();
    AddKPI();
    AddRIC();
}

//rApp

function rAppInfo() {
    $(".RicObjList:lt(1) > .RicObj").on('click', function (e) {
        $("#InsertDataFrom").css("display", "flex");
        e.preventDefault();
        AjaxUpdate(ControllerName + "/GetRappPage", "InsertDataFrom", true, GetParialView, SetrAppInfoJs);
    });
}

function SetrAppInfoJs() {
    $("#CloseInfo").on('click', function (e) {
        $("#InsertDataFrom").css("display", "none");
    });
    rAppInfoTabJs();
    rAppPolicyTabJs();
    rAppEffectTabJs();
}

function rAppInfoTabJs() {
    $("#RappInfoTab").on('click', function (e) {
        AjaxUpdate(ControllerName + "/GetRappInfoTab", "InfoMainContainer", false, GetParialView, null);
    });
}

function rAppPolicyTabJs() {
    $("#RappPolicyTab").on('click', function (e) {
        AjaxUpdate(ControllerName + "/GetRappPolicyTab", "InfoMainContainer", false, GetParialView, null);
    });
}

function rAppEffectTabJs() {
    $("#RappEffectTab").on('click', function (e) {
        AjaxUpdate(ControllerName + "/GetRappEffectTab", "InfoMainContainer", false, GetParialView, null);
    });
}

//KPI

function KPIInfo() {
    $(".RicObjList:gt(0):lt(1) > .RicObj").on('click', function (e)
    {
                $("#InsertDataFrom").css("display", "flex");
        e.preventDefault();
        AjaxUpdate(ControllerName + "/GetKPIPage", "InsertDataFrom", true, GetParialView, SetKPIInfoJs);
    });
}

function SetKPIInfoJs() {
    $("#CloseInfo").on('click', function (e) {
        $("#InsertDataFrom").css("display", "none");
    });
    KpiInfoTabJs();
    KpiLineTabJs();
    KpiChartTabJs();
    KpiDataTabJs();
}

function KpiInfoTabJs() {
    $("#KpiInfoTab").on('click', function (e) {
        AjaxUpdate(ControllerName + "/GetKPIInfoTab", "InfoMainContainer", false, GetParialView, null);
    });
}

function KpiLineTabJs() {
    $("#KpiLineTab").on('click', function (e) {
        AjaxUpdate(ControllerName + "/GetKPILineTab", "InfoMainContainer", false, GetParialView, DrawKpiLine);
    });
}

function DrawKpiLine() {
    UpConfig = {
        type: 'line',
        data: {
            labels: [
                "point1", "point2", "point3", "point4", "point5"
            ],
            datasets: [
                {
                    label: 'testdata',
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
                    fill: false,
                    data: [5,6,8,9,10]
                }
            ]
         },
         options: {
            responsive: true,
            title: {
                display: true,
                text: 'IIR Uplink Throughput'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Time'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Mbps'
                    }
                }]
            }
        }
    };

    var Upctx = document.getElementById('Chart1').getContext('2d');
    window.UpLine = new Chart(Upctx, UpConfig);
}

function KpiChartTabJs() {
    $("#KpiChartTab").on('click', function (e) {
        AjaxUpdate(ControllerName + "/GetKPIChartTab", "InfoMainContainer", false, GetParialView, DrawKpiChart);
    });
}

function DrawKpiChart() {
    UpConfig = {
        type: 'pie',
        data: {
            labels: [
                "data1", "data2", "data3", "data4", "data5"
            ],
            datasets: [
                {
                    label: 'testdata',
                    backgroundColor: [window.chartColors.red, window.chartColors.blue, window.chartColors.yellow, window.chartColors.green, window.chartColors.purple],
                    data: [10, 20, 30, 20, 20]
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Pie Chart'
                }
            }
        }
    };

    var Upctx = document.getElementById('Chart1').getContext('2d');
    window.UpLine = new Chart(Upctx, UpConfig);
}

function KpiDataTabJs() {
    $("#KpiDataTab").on('click', function (e) {
        AjaxUpdate(ControllerName + "/GetKPIDataTab", "InfoMainContainer", false, GetParialView, null);
    });
}

//Near RT RIC
function NearRICInfo() {
    $(".RicObjList:gt(1) > .RicObj").on('click', function (e) {
        $("#InsertDataFrom").css("display", "flex");
        e.preventDefault();
        AjaxUpdate(ControllerName + "/GetNearRTRICPage", "InsertDataFrom", true, GetParialView, SetNearInfoJs);
    });
}

function SetNearInfoJs() {
    $("#CloseInfo").on('click', function (e) {
        $("#InsertDataFrom").css("display", "none");
    });
    NearInfoTabJs();
    NearStaTabJs();
    NearPlyTabJs();
    NearLoadTabJs();
}

function NearInfoTabJs() {
    $("#NearInfoTab").on('click', function (e) {
        AjaxUpdate(ControllerName + "/GetNearInfoTab", "InfoMainContainer", false, GetParialView, null);
    });
}


function NearStaTabJs() {
    $("#NearStaTab").on('click', function (e) {
        AjaxUpdate(ControllerName + "/GetNearStaTab", "InfoMainContainer", false, GetParialView, null);
    });
}


function NearPlyTabJs() {
    $("#NearPlyTab").on('click', function (e) {
        AjaxUpdate(ControllerName + "/GetNearPlyTab", "InfoMainContainer", false, GetParialView, null);
    });
}


function NearLoadTabJs() {
    $("#NearLoadTab").on('click', function (e) {
        AjaxUpdate(ControllerName + "/GetNearLoadTab", "InfoMainContainer", false, GetParialView, null);
    });
}


function SetNearRTInfoJs() {
    $("#CloseInfo").on('click', function (e) {
        $("#InsertDataFrom").css("display", "none");
    });
    KpiInfoTabJs();
    KpiLineTabJs();
    KpiChartTabJs();
    KpiDataTabJs();
}



//Main

function SetRAppAddBtn() {
    $("#CloseButton").on('click', function (e) {
        $("#InsertDataFrom").css("display", "none");
    });
    $("#SendButton").on('click', function (e) {
        AjaxUpdate(ControllerName + "/RAppTestPage", "InsertDataFrom", true, GetParialView, SetRAppClsBtn);
    });
}

function SetKPIAddBtn() {
    $("#CloseButton").on('click', function (e) {
        $("#InsertDataFrom").css("display", "none");
    });
    $("#SendButton").on('click', function (e) {
        alert("Get KPI");
        $("#InsertDataFrom").css("display", "none");
    });
}

function SetRicAddBtn() {
    $("#CloseButton").on('click', function (e) {
        $("#InsertDataFrom").css("display", "none");
    });
    $("#SendButton").on('click', function (e) {
        alert("Add Ric");
        $("#InsertDataFrom").css("display", "none");
    });
}


function SetRAppClsBtn() {
    $("#CloseButton").on('click', function (e) {
        $("#InsertDataFrom").css("display", "none");
    });
}

function AddRapp() {
    $("#RicAddRapp").on('click', function (e) {
        $("#InsertDataFrom").css("display", "flex");
        e.preventDefault();
        AjaxUpdate(ControllerName + "/AddRAppPage", "InsertDataFrom", true, GetParialView, SetRAppAddBtn);
    });
}

function AddKPI() {
    $("#RicAddKPI").on('click', function (e) {
        $("#InsertDataFrom").css("display", "flex");
        e.preventDefault();
        AjaxUpdate(ControllerName + "/AddKPIPage", "InsertDataFrom", true, GetParialView, SetKPIAddBtn);
    });
}

function AddRIC() {
    $("#RicAddRic").on('click', function (e) {
        $("#InsertDataFrom").css("display", "flex");
        e.preventDefault();
        AjaxUpdate(ControllerName + "/AddRICPage", "InsertDataFrom", true, GetParialView, SetRicAddBtn);
    });
}

function LoadRApp() {
    //Adjust width
    var LenObjList = $(".RicObjList").width();
    var LenObj = $(".RicObj").width();
    var NumOfRow = Math.floor(LenObjList / LenObj);
    console.log("Number Of Object per Row" + NumOfRow);
    //Get Current RApp Data
    rAppList = ["RApp1", "RApp2", "RApp3", "RApp4", "RApp5", "RApp6", "RApp7"]; //Mockup
    //Clear Rapp Obj List
    $(".RicObjList")[0].innerHTML = "";
    //Create RApp RicObj
    rAppList.slice(0, NumOfRow).forEach(e => {
        var newDiv = document.createElement("div");
        newDiv.className = "RicObj";
        newDiv.innerHTML = e;
        $(".RicObjList")[0].appendChild(newDiv);
    }
    );
    rAppInfo();
}

function LoadKPI() {
    //Adjust width
    var LenObjList = $(".RicObjList").width();
    var LenObj = $(".RicObj").width();
    var NumOfRow = Math.floor(LenObjList / LenObj);
    console.log("Number Of Object per Row" + NumOfRow);
    //Get Current RApp Data
    rAppList = ["KPI1", "KPI2", "KPI3"]; //Mockup
    //Clear Rapp Obj List
    $(".RicObjList")[1].innerHTML = "";
    //Create RApp RicObj
    rAppList.slice(0, NumOfRow).forEach(e => {
        var newDiv = document.createElement("div");
        newDiv.className = "RicObj";
        newDiv.innerHTML = e;
        $(".RicObjList")[1].appendChild(newDiv);
    }
    );
    KPIInfo();
}

function LoadNearRIC() {
    //Adjust width
    var LenObjList = $(".RicObjList").width();
    var LenObj = $(".RicObj").width();
    var NumOfRow = Math.floor(LenObjList / LenObj);
    console.log("Number Of Object per Row" + NumOfRow);
    //Get Current RApp Data
    rAppList = ["RIC1", "RIC2", "RIC3", "RIC4"]; //Mockup
    //Clear Rapp Obj List
    $(".RicObjList")[2].innerHTML = "";
    //Create RApp RicObj
    rAppList.slice(0, NumOfRow).forEach(e => {
        var newDiv = document.createElement("div");
        newDiv.className = "RicObj";
        newDiv.innerHTML = e;
        $(".RicObjList")[2].appendChild(newDiv);
    }
    );
    NearRICInfo();
}

function test() {
    $(".ProcessContainer .CircleContainer .btn")[i].id = "btnX";
    $(".RicObjList").width();
    $(".RicObj").width();
    Math.floor(288 / 74);
    var newClass = document.createElement("div");
    newClass.className = "RicObj"
    $(".RicObjList")[0].appendChild(newClass);
    $(".RicObj").attr("class", "test") //chagne class
    $("RicObj").addClass("blue"); //add classname
    $(".RicObj").css("margin"); //get style
    $(".RicObj")[0].style.width;
    $(".RicObj").slice(3).first().attr("name", "test")
    $(".RicObj").slice(4).first().css("width", "160px")
}
