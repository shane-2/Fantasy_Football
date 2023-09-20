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

        [HttpGet("ListFantasyFolks")]
        public List<FantasyFolk> GetFantasyFolks()
        {
            return dbcontext.FantasyFolks.OrderBy(x => x.Rank).ToList();
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

        Random r = new Random();
        [HttpGet("MatchPair")]
        public List<FantasyFolk> MatchPair()
        {
            List<FantasyFolk> Duo = new List<FantasyFolk>();
            int a = r.Next(1, dbcontext.FantasyFolks.ToList().Count);
            int b = r.Next(1, dbcontext.FantasyFolks.ToList().Count);
            FantasyFolk AB = dbcontext.FantasyFolks.FirstOrDefault(x => x.Id == a);
            Duo.Add(AB);
            if (AB.Rank <= 0)
            {
                while (a == b)
                {
                    b = r.Next(1, dbcontext.FantasyFolks.ToList().Count);
                }
            }
            else if (AB.Rank >= 1 && AB.Rank < 6)
            {
                b = r.Next(1, 6);
                while (a == b)
                {
                    b = r.Next(1, AB.Rank + 3);
                }
            }
            else if (AB.Rank >= 6 && AB.Rank < 16)
            {
                b = r.Next(6, 16);
                while (a == b)
                {
                    b = r.Next(6, AB.Rank + 3);
                }
            }
            else
            {
                try
                {
                    b = r.Next(AB.Rank - 6, AB.Rank + 6);
                    while (a == b)
                    {
                        b = r.Next(AB.Rank - 6, AB.Rank + 6);
                    }
                }
                catch
                {
                    b = r.Next(AB.Rank - 6, AB.Rank - 1);
                }
            }
            //else if (AB.Rank >= 6 && AB.Rank < 20)
            //{
            //    b = r.Next(6, 26);
            //    while (a == b)
            //    {
            //        b = r.Next(6, 26);
            //    }
            //}
            //else if (AB.Rank >= 6 && AB.Rank < 20)
            //{
            //    b = r.Next(6, 26);
            //    while (a == b)
            //    {
            //        b = r.Next(6, 26);
            //    }
            //}
            //else
            //{
            //    b = r.Next(75, 101);
            //    while (a == b)
            //    {
            //        b = r.Next(75, 101);
            //    }
            //}
            FantasyFolk BA = dbcontext.FantasyFolks.FirstOrDefault(x => x.Id == b);
            Duo.Add(BA);
            return Duo;
        }
        [HttpPatch("{playerId}")]
        public List<FantasyFolk> CountVote(List<FantasyFolk> t, string playerId)
        {
            List<FantasyFolk> Match = new List<FantasyFolk>();
            FantasyFolk c = t.FirstOrDefault(c => c.PlayerId == playerId);
            FantasyFolk d = t.FirstOrDefault(d => d.PlayerId != playerId);
            c.Votes++;
            c.Matches++;
            d.Matches++;
            //change floats to doubles and add a math.round()
            decimal winPercentA = (decimal)(c.Votes / c.Matches);
            c.Winpercent = Math.Round(winPercentA, 2);
            dbcontext.FantasyFolks.Update(c);
            decimal winPercentB = (decimal)(d.Votes / d.Matches);
            d.Winpercent = Math.Round(winPercentB, 2); ;
            dbcontext.FantasyFolks.Update(d);
            List<FantasyFolk> all = dbcontext.FantasyFolks.ToList();
            all = all.OrderByDescending(x => x.Winpercent).ToList();
            int count = 1;
            foreach (FantasyFolk f in all)
            {
                f.Rank = count;
                count++;
                dbcontext.FantasyFolks.Update(f);
            }
            dbcontext.SaveChanges();
            Match.Add(c);
            Match.Add(d);
            return Match;
        }

        [HttpPost]
        public FantasyFolk AddFolk([FromBody] FantasyFolk newFolk)
        {
            dbcontext.FantasyFolks.Add(newFolk);
            dbcontext.SaveChanges();
            return newFolk;
        }

        [HttpDelete("{Id}")]
        public FantasyFolk DeleteFolk(int Id)
        {
            FantasyFolk deleted = dbcontext.FantasyFolks.Find(Id);
            dbcontext.FantasyFolks.Remove(deleted);
            dbcontext.SaveChanges();

            return deleted;

        }


        //I think this is supposed to be a patch
        //[HttpPost]
        //public void CountVote(FantasyFolk A, FantasyFolk B, bool VoteA)
        //{
        //    FantasyFolk c = dbcontext.FantasyFolks.FirstOrDefault(c => c.Id == A.Id);
        //    FantasyFolk d = dbcontext.FantasyFolks.FirstOrDefault(d => d.Id == B.Id);
        //    if (VoteA == true)
        //    {
        //        c.Votes++;
        //        c.Matches++;
        //        d.Matches++;
        //    }
        //    else if (VoteA == false)
        //    {
        //        d.Votes++;
        //        d.Matches++;
        //        c.Matches++;
        //    }
        //    else
        //    {
        //        Console.WriteLine("VoteA is null");
        //    }
        //    //change floats to doubles and add a math.round()
        //    float winPercentA = (float)(A.Votes / A.Matches);
        //    c.Winpercent = Math.Round(winPercentA, 2);
        //    dbcontext.FantasyFolks.Update(c);

        //    float winPercentB = (float)(B.Votes / B.Matches);
        //    d.Winpercent = Math.Round(winPercentB, 2); ;
        //    dbcontext.FantasyFolks.Update(d);

        //    dbcontext.SaveChanges();

        //}






    }
}

