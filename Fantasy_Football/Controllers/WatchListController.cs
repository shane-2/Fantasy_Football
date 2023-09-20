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

        




        [HttpGet("{id}")]

        public List<Watchlist> GetById(string id)
        {
            Console.WriteLine(dbcontext.Watchlists.ToList());
            return dbcontext.Watchlists.Where(u => u.Username ==id).ToList();
        }

        [HttpPost]

        public Watchlist AddWatchList([FromBody] Watchlist newPlayer)
        {
            Watchlist players = new Watchlist();
            int x = 0;
            foreach (Watchlist p in dbcontext.Watchlists)
            {
                if (newPlayer.Username == p.Username && newPlayer.PlayerId == p.PlayerId)
                {
                    x++;
                }
            }
            if (x == 0)
            {
                players.Username = newPlayer.Username;
                players.PlayerId = newPlayer.PlayerId;
                
                dbcontext.Watchlists.Add(players);
                dbcontext.SaveChanges();
            }
            return players;
        }


        // api/Watchlist/3
        [HttpDelete("{id}")]
        public Watchlist DeleteById(int id)
        {
            Watchlist deleted = dbcontext.Watchlists.Find(id);
            dbcontext.Watchlists.Remove(deleted);
            dbcontext.SaveChanges();

            return deleted;
        }

       

    }
}
