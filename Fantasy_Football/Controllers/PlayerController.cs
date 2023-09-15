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
        FfdbContext dbcontext = new FfdbContext();

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

        [HttpGet("MatchPair")]
        public List<FantasyFolk> MatchPair()
        {
            List<FantasyFolk> Duo = new List<FantasyFolk>();
            Random r = new Random();
            int a = r.Next(1, 21);
            int b = r.Next(1, 21);

            FantasyFolk AC = dbcontext.FantasyFolks.FirstOrDefault(x => x.Id == a);

            Duo.Add(AC);
            if (a == b)
            {
                int c = r.Next(1, 21);
                FantasyFolk CA = dbcontext.FantasyFolks.FirstOrDefault(x => x.Id == c);
                Duo.Add(CA);
                return Duo;
            }
            FantasyFolk BA = dbcontext.FantasyFolks.FirstOrDefault(x => x.Id == b);
            Duo.Add(BA);
            return Duo;
        }

        [HttpPost]
        public void CountVote(FantasyFolk A, FantasyFolk B, bool VoteA)
        {
            if (VoteA == true)
            {
                A.Votes++;
                A.Matches++;
                B.Matches++;
            }
            else if (VoteA == false)
            {
                B.Votes++;
                B.Matches++;
                A.Matches++;
            }
        }
    }
}

