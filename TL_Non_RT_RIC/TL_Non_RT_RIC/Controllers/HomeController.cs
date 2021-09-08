using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Data.SqlClient;
using System.Data;

namespace TL_Non_RT_RIC.Controllers
{
    [Route("Home")]
    public class HomeController : Controller
    {

        public HomeController()
        {
        }

        // GET: CellAntMaps
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            return View();
        }

        [HttpGet("AddRAppPage")]
        public async Task<IActionResult> AddRAppPage()
        {
            return PartialView("./Views/Home/AddRApp.cshtml");
        }

        [HttpGet("RAppTestPage")]
        public async Task<IActionResult> RAppTestPage()
        {
            return PartialView("./Views/Home/RAppTest.cshtml");
        }

        [HttpGet("AddKPIPage")]
        public async Task<IActionResult> AddKPIPage()
        {
            return PartialView("./Views/Home/AddKPI.cshtml");
        }


        [HttpGet("AddRICPage")]
        public async Task<IActionResult> AddRICPage()
        {
            return PartialView("./Views/Home/AddRIC.cshtml");
        }

        /*rApp*/
        [HttpGet("GetRappPage")]
        public async Task<IActionResult> GetRappPage()
        {
            return PartialView("./Views/Home/rAppInfo.cshtml");
        }

        [HttpGet("GetRappInfoTab")]
        public async Task<IActionResult> GetRappInfoTab()
        {
            return PartialView("./Views/Home/rApp/rAppInfoTab.cshtml");
        }

        [HttpGet("GetRappPolicyTab")]
        public async Task<IActionResult> GetRappPolicyTab()
        {
            return PartialView("./Views/Home/rApp/rAppPolicyTab.cshtml");
        }
        [HttpGet("GetRappEffectTab")]
        public async Task<IActionResult> GetRappEffectTab()
        {
            return PartialView("./Views/Home/rApp/rAppEffectTab.cshtml");
        }

        /*KPI*/

        [HttpGet("GetKPIPage")]
        public async Task<IActionResult> GetKPIPage()
        {
            return PartialView("./Views/Home/KPIInfo.cshtml");
        }

        [HttpGet("GetKPIInfoTab")]
        public async Task<IActionResult> GetKPIInfoTab()
        {
            return PartialView("./Views/Home/KPITab/KPIInfoTab.cshtml");
        }

        [HttpGet("GetKPILineTab")]
        public async Task<IActionResult> GetKPILineTab()
        {
            return PartialView("./Views/Home/KPITab/KPILineTab.cshtml");
        }

        [HttpGet("GetKPIChartTab")]
        public async Task<IActionResult> GetKPIChartTab()
        {
            return PartialView("./Views/Home/KPITab/KPIChartTab.cshtml");
        }

        [HttpGet("GetKPIDataTab")]
        public async Task<IActionResult> GetKPIDataTab()
        {
            return PartialView("./Views/Home/KPITab/KPIDataTab.cshtml");
        }

        /*Near RT RIC*/
        [HttpGet("GetNearRTRICPage")]
        public async Task<IActionResult> GetNearRTRICPage()
        {
            return PartialView("./Views/Home/NearRTInfo.cshtml");
        }

        [HttpGet("GetNearInfoTab")]
        public async Task<IActionResult> GetNearInfoTab()
        {
            return PartialView("./Views/Home/NearTab/NearInfoTab.cshtml");
        }

        [HttpGet("GetNearStaTab")]
        public async Task<IActionResult> GetNearStaTab()
        {
            return PartialView("./Views/Home/NearTab/NearStaTab.cshtml");
        }

        [HttpGet("GetNearPlyTab")]
        public async Task<IActionResult> GetNearPlyTab()
        {
            return PartialView("./Views/Home/NearTab/NearPlyTab.cshtml");
        }

        [HttpGet("GetNearLoadTab")]
        public async Task<IActionResult> GetNearLoadTab()
        {
            return PartialView("./Views/Home/NearTab/NearLoadTab.cshtml");
        }
    }
}
