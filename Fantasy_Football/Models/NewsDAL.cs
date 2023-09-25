using Newtonsoft.Json;
using System.Net;

namespace Fantasy_Football.Models
{
    public class NewsDAL
    {
        public static List<News> GetNews()
        {
            //Setup
            string apiKey = Secret.apiKey;
            string url = $"https://api.fantasynerds.com/v1/nfl/news?apikey={apiKey}";


            //request
            HttpWebRequest request = WebRequest.CreateHttp(url);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            //Convert it to JSON
            StreamReader reader = new StreamReader(response.GetResponseStream());
            string JSON = reader.ReadToEnd();

            //Convert to c#
            List<News> result = JsonConvert.DeserializeObject<List<News>>(JSON);
            return result;
        }

    }
}

