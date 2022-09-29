using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace LNCDPE.Controllers
{
    public class KBController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}