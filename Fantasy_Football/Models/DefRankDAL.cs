using Newtonsoft.Json;
using System.Net;

namespace Fantasy_Football.Models
{
    public class DefRankDAL
    {
        public static DefRank GetDef()
        {
            //Setup
            string apiKey = Secret.apiKey;
            string url = $"https://api.fantasynerds.com/v1/nfl/defense-rankings?apikey={apiKey}";


            //request
            HttpWebRequest request = WebRequest.CreateHttp(url);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            //Convert it to JSON
            StreamReader reader = new StreamReader(response.GetResponseStream());
            string JSON = reader.ReadToEnd();

            //Convert to c#
            DefRank result = JsonConvert.DeserializeObject<DefRank>(JSON);
            return result;
        }
    }
}
