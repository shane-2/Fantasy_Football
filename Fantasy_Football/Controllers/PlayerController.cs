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

        [HttpGet("{PlayerId}")]
        public void PlayerROS(Player b)
        {

            if(b.position == "QB")
            {

            }
            else if (b.position == "RB")
            {

            }
            else if (b.position == "TE")
            {

            }
            else if (b.position == "WR")
            {

            }
            else if (b.position == "K")
            {

            }
            else if (b.position == "DEF")
            {

            }
            else if (b.position == "IDP")
            {

            }
        }

    }
}
