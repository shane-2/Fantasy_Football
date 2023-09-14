using Fantasy_Football.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Fantasy_Football.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerController : ControllerBase
    {
       

        [HttpGet]
        public List<Player> PlayerList()
        {
            List<Player> result = PlayerDAL.GetPlayers().players.ToList();
            return result;



        }
    }
}
