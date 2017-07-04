using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TestApp4.Models;

namespace TestApp4.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Authenticate([FromBody] User user)
        {
            //Check authentication
            if(user.name == "Thriven" || user.name == "Selva")
                return
                    Json(new User {name = user.name, email = user.name + "@gmail.com", isAuthenticated = true, password = ""});
            else
                return Json(new User { name = user.name, email = "", isAuthenticated = false, password = "" });

        }

        [HttpGet]
        public IActionResult UserProfile(string name)
        {
            //Check authentication
            return Json(new User { name = name, email= name + "@gmail.com", isAuthenticated = true, password = "" }
            );
        }
    }
}
