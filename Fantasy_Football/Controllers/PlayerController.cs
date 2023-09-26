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
            if (a <= 0)
            {
                while (a == b)
                {
                    b = r.Next(1, dbcontext.FantasyFolks.ToList().Count);
                }
            }
            else if (a >= 1 && a < 6)
            {
                b = r.Next(1, 6);
                while (a == b)
                {
                    b = r.Next(1, a + 3);
                }
            }
            else if (a >= 6 && a < 16)
            {
                b = r.Next(6, 16);
                while (a == b)
                {
                    b = r.Next(6, a + 3);
                }
            }
            else
            {
                try
                {
                    b = r.Next(a - 6, a + 6);
                    while (a == b)
                    {
                        b = r.Next(a - 6, a + 6);
                    }
                }
                catch
                {
                    b = r.Next(a - 8, a - 2);
                }
            }

            FantasyFolk AB = dbcontext.FantasyFolks.FirstOrDefault(x => x.Rank == a);
            FantasyFolk BA = dbcontext.FantasyFolks.FirstOrDefault(x => x.Rank == b);
            if (BA == null)
            {
                b = r.Next(1, dbcontext.FantasyFolks.ToList().Count);

                BA = dbcontext.FantasyFolks.FirstOrDefault(x => x.Id == b);
            }
            Duo.Add(BA);
            Duo.Add(AB);
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

        [HttpGet("{VoterFraud}")]
        public List <FantasyFolk> VoterFraud()
        {
            List<FantasyFolk> list = dbcontext.FantasyFolks.ToList();
            foreach(FantasyFolk f in list)
            {
                f.Votes = f.Votes / 2;
                f.Matches = f.Matches / 2;
                dbcontext.FantasyFolks.Update(f);
                
            }
            dbcontext.SaveChanges();
            return list;

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

        [HttpGet("News")]
        public List<News> NewsList()
        {
            List<News> result = NewsDAL.GetNews().ToList();
            return result;
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

