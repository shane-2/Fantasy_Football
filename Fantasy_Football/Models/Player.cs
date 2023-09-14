namespace Fantasy_Football.Models
{
  

        public class PlayerModel
        {
            public int season { get; set; }
            public string format { get; set; }
            public Player[] players { get; set; }
        }

        public class Player
        {
            public string playerId { get; set; }
            public string name { get; set; }
            public string team { get; set; }
            public string position { get; set; }
            public int rank { get; set; }
            public int rank_position { get; set; }
            public string injury_risk { get; set; }
        }



    
}
