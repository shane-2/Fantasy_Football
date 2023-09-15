namespace Fantasy_Football.Models
{
    
        public class HotCold
        {
            public Most_Added[] most_added { get; set; }
            public Most_Dropped[] most_dropped { get; set; }
        }

        public class Most_Added
        {
            public string playerId { get; set; }
            public string name { get; set; }
            public string team { get; set; }
            public string position { get; set; }
        }

        public class Most_Dropped
        {
            public string playerId { get; set; }
            public string name { get; set; }
            public string team { get; set; }
            public string position { get; set; }
        }

    
}
