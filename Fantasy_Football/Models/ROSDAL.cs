using Newtonsoft.Json;
using System.Net;

namespace Fantasy_Football.Models
{
    public class ROSDAL
    {
        public static PlayerDetail GetROS()
        {
            //Setup
            string apiKey = Secret.apiKey;
            string url = $"https://api.fantasynerds.com/v1/nfl/ros?apikey={apiKey}";


            //request
            HttpWebRequest request = WebRequest.CreateHttp(url);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            //Convert it to JSON
            StreamReader reader = new StreamReader(response.GetResponseStream());
            string JSON = reader.ReadToEnd();

            //Convert to c#
            PlayerDetail result = JsonConvert.DeserializeObject<PlayerDetail>(JSON);
            return result;
        }
    }
}
