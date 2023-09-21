using Fantasy_Football.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;

namespace Fantasy_Football.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WatchListController : ControllerBase
    {
        FfdbContext dbcontext = new FfdbContext();

        




        [HttpGet("{username}")]

        public List<Watchlist> GetById(string username)
        {
           
            return dbcontext.Watchlists.Where(u => u.Username ==username).ToList();
        }

        [HttpGet("id/{id}")]
        public FantasyFolk GetFolkByWatchList(int id)
        {
            //FantasyFolk folk = new FantasyFolk();
            //List <FantasyFolk> WL = new List<FantasyFolk>();
            //List <int> ids = new List<int> ();
            //int x = 0;
            //foreach(Watchlist w in wl) 
            //{
            //    x = w.Id;
            //    ids.Add (x);
            //}

            //foreach(int i in ids)
            //{
            return dbcontext.FantasyFolks.FirstOrDefault(u => u.Id == id);
            //    WL.Add(folk);
            //}
            //return WL;
        }

        [HttpPost]

        public Watchlist AddWatchList([FromBody] Watchlist newPlayer)
        {
            if (!dbcontext.Watchlists.Any(p => p.PlayerId == newPlayer.Id && p.Username == newPlayer.Username))
            {
                dbcontext.Watchlists.Add(newPlayer);
                dbcontext.SaveChanges();
                return newPlayer;
            }
            return null;

            //Watchlist players = new Watchlist();
            //int x = 0;
            //foreach (Watchlist p in dbcontext.Watchlists)
            //{
            //    if (newPlayer.Username == p.Username && newPlayer.PlayerId == p.PlayerId)
            //    {
            //        x++;
            //    }
            //}
            //if (x == 0)
            //{
            //    players.Username = newPlayer.Username;
            //    players.PlayerId = newPlayer.PlayerId;
                
                
            //}
        }


        // api/Watchlist/3
        [HttpDelete("{id}")]
        public Watchlist DeleteById(int id, string username)
        {
            Watchlist deleted = dbcontext.Watchlists.FirstOrDefault(x => x.PlayerId == id && x.Username == username);
            dbcontext.Watchlists.Remove(deleted);
            dbcontext.SaveChanges();

            return deleted;
        }

       

    }
}
