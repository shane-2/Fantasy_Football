using Fantasy_Football.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;

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

        [HttpGet("ROSDetails")]
        public IActionResult PlayerROS(string playerId, string position)
        {

            if (position == "QB")
            {
                return Ok(ROSDAL.GetROS().projections.QB.FirstOrDefault(d => playerId == d.playerId));
            }
            else if (position == "RB")
            {
                return Ok(ROSDAL.GetROS().projections.RB.FirstOrDefault(d => playerId == d.playerId));

            }
            else if (position == "TE")
            {
                return Ok(ROSDAL.GetROS().projections.TE.FirstOrDefault(d => playerId == d.playerId));

            }
            else if (position == "WR")
            {
                return Ok(ROSDAL.GetROS().projections.WR.FirstOrDefault(d => playerId == d.playerId));

            }
            else if (position == "K")
            {
                return Ok(ROSDAL.GetROS().projections.K.FirstOrDefault(d => playerId == d.playerId));

            }
            else if (position == "DEF")
            {
                return Ok(ROSDAL.GetROS().projections.DEF.FirstOrDefault(d => playerId == d.playerId));

            }
            else if (position == "IDP")
            {
                return Ok(ROSDAL.GetROS().projections.IDP.FirstOrDefault(d => playerId == d.playerId));

            }
            else
            {
                return null;
            }

        }
            [HttpGet("HotCold")]

            public HotCold HotColdLists()
        {
            HotCold result = AddDropDAL.GetAddDrop();
            return result;
        }

        [HttpGet("DefRanking")]
        public DefRank AllDefRank()
        {
            DefRank result = DefRankDAL.GetDef();
            return result;
        }

    }
}
