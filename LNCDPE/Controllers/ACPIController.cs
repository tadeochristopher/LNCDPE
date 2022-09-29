using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LNCDPE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ACPIController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Hello", "World" };
        }
    }
}