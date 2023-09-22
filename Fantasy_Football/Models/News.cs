namespace Fantasy_Football.Models
{
   
        

        public class News
        {
            public string article_headline { get; set; }
            public string article_date { get; set; }
            public string article_author { get; set; }
            public string article_excerpt { get; set; }
            public string article_link { get; set; }
            public string[] playerIds { get; set; }
            public string[] teams { get; set; }
        }

 }

