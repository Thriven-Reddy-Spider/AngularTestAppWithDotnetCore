using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TestApp4.Models;

namespace TestApp4.Controllers
{
    public class HomeController : Controller
    {
        [HttpPost]
        public IActionResult Authenticate(User user)
        {
            //Check authentication
            return
                Json(new User {name = "Thriven", email = "reddy3ven3@gmail.com", isAuthenticated = true, password = ""});
        }

        [HttpGet]
        public IActionResult UserProfile(string name)
        {
            //Check authentication
            return Json(new User { name = "Thriven", email= "reddy3ven3@gmail.com", isAuthenticated = true, password = "" }
            );
        }
    }
}
