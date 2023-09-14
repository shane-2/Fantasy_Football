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
        public IActionResult PlayerROS(Player b)
        {

            if(b.position == "QB")
            {
                return Ok(ROSDAL.GetROS().projections.QB.FirstOrDefault(d => b.playerId == d.playerId));
            }
            else if (b.position == "RB")
            {
                return Ok(ROSDAL.GetROS().projections.RB.FirstOrDefault(d => b.playerId == d.playerId));

            }
            else if (b.position == "TE")
            {
                return Ok(ROSDAL.GetROS().projections.TE.FirstOrDefault(d => b.playerId == d.playerId));

            }
            else if (b.position == "WR")
            {
                return Ok(ROSDAL.GetROS().projections.WR.FirstOrDefault(d => b.playerId == d.playerId));

            }
            else if (b.position == "K")
            {
                return Ok(ROSDAL.GetROS().projections.K.FirstOrDefault(d => b.playerId == d.playerId));

            }
            else if (b.position == "DEF")
            {
                return Ok(ROSDAL.GetROS().projections.DEF.FirstOrDefault(d => b.playerId == d.playerId));

            }
            else if (b.position == "IDP")
            {
                return Ok(ROSDAL.GetROS().projections.IDP.FirstOrDefault(d => b.playerId == d.playerId));

            }
            else
            {
                return null;
            }
        }

    }
}
