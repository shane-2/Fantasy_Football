using Microsoft.AspNetCore.Mvc;
using Fantasy_Football.Models;

namespace Fantasy_Football.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult PlayerList()
        {
            List<Player> result = PlayerDAL.GetPlayers().players.ToList();
            return View(result);
        }
    }
}
