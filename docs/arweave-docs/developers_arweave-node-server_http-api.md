The Arweave protocol is based on HTTP, so any existing http clients/libraries can be used to interface with the network, for example Axios or Fetch for JavaScript, Guzzle for PHP, etc.
The default port is **1984**.
Requests and queries can be sent to any Arweave node directly using their IP address, for example http://159.65.213.43:1984/info. Hostnames can also be used if configured with DNS, for example https://arweave.net/info.
## 
Sample Request
cURLJavaScript (Fetch)NodeJS
Copy```
curl --request GET \
 --url 'https://arweave.net/info'
```

Copy```
fetch("https://arweave.net/info")
 .then((response) => response.json())
 .then((data) => {
  console.log("Arweave network height is: " + data.height);
 })
 .catch((error) => {
  console.error(error);
 });
```

Copy```
let request = require("request");
let options = {
 method: "GET",
 url: "https://arweave.net/info",
};
request(options, function (error, response, body) {
 if (error) {
  console.error(error);
 }
 console.log("Arweave network height is: " + JSON.parse(body).height);
});
```

## 
Integrations
Arweave specific wrappers and clients are currently in development to simplify common operations and API interactions, there are currently integrations for Go, PHP, Scala (which can also be used with Java and C#) and JavaScript/TypeScript/NodeJS.
## 
Schema
Common data structures, formats, and processes explained.
## 
Block Format
block height < 269510block height >= 269510, < 422250block height >= 422250, < 812970block height >= 812970, < 1132210block height >= 1132210
Copy```
{
 "nonce": "AAEBAAABAQAAAQAAAQEBAAEAAAABAQABAQABAAEAAAEBAAAAAQAAAAAAAQAAAQEBAAEBAAEBAQEBAQEAAQEBAAABAQEAAQAAAQABAAABAAAAAAEBAQEBAAABAQEAAAAAAAABAQAAAQAAAQEAAQABAQABAQEAAAABAAABAQABAQEAAAEBAQABAQEBAQEBAAABAQEAAAABAQABAAABAAEAAQEBAQAAAAABAQABAQAAAAAAAAABAQABAAEBAAEAAQABAQABAAEBAQEBAAEAAQABAAABAQEBAQAAAQABAQEBAAEBAQAAAQEBAQABAAEBAQEBAAAAAAABAAEAAAEAAAEAAAEBAAAAAAEAAQABAAAAAAABAQABAQAAAAEBAQAAAAABAAABAAEBAQEAAAAAAQAAAQABAQABAAEAAQABAQAAAAEBAQAAAQAAAAEBAAEBAAEBAQEAAAEBAQAAAQAAAAABAAEAAQEAAQ",
 "previous_block": "V6YjG8G3he0JIIwRtzTccX39rS0jH-jOqUJy6rxrVAHY0RT0AVhG8K22wCDxy1A0",
 "timestamp": 1528500720,
 "last_retarget": 1528500720,
 "diff": 31,
 "height": 100,
 "hash": "AAAAANsEvzGbICpfAj3NN41_ox--2cNxkEhAo0aggpDPkY7zru29g24uMWUP9hTa",
 "indep_hash": "",
 "txs": ["7BoxcxiJIjTwUp3JXp0xRJQXf6hZtyJj1kjGNiEl5A8"],
 "wallet_list": "ph2FDDuQjNbca34tz7vP9X5Xve2EGJi2ZgFqhMITAdw",
 "reward_addr": "em8MfGRInwWEAQnE6b50ENaFOf-0to4Pbygng1ilWGQ",
 "tags": [],
 "reward_pool": 60770606104,
 "weave_size": 599058,
 "block_size": 0
}
```

Copy```
{
 "nonce": "O3IQWXYmxLN_b0w7QyT2GTruaVIGsl-Ybhc6Pl2V20U",
 "previous_block": "VRVYubqppWUVAeCWlzHR-38dQoWcFAKbGculkVZThfj-hNMX4QVZjqkC6-PkiNGE",
 "timestamp": 1567052949,
 "last_retarget": 1567052114,
 "diff": "115792088374597902074750511579343425068641803109251942518159264612597601665024",
 "height": 269512,
 "hash": "____47liyh_OZdYUP4EzBoLl7JOPge9VsWPQ3b5kiU8",
 "indep_hash": "5H-hJycMS_PnPOpobXu2CNobRlgqmw4yEMQSc5LeBfS7We63l8HjS-Ek3QaxK8ug",
 "txs": [
  "tqDWYT-qdoCeSWGpV2Ig48lpswOxccbBpyxf0GQjs2U",
  "y0bIjxLaXu1gEjpRlyPUh0Uz0c5XrhIOs6z4lerXo8w"
 ],
 "wallet_list": "6haahtRP5WVchxPbqtLCqDsFWidhebYJpU5PVB4zQhE",
 "reward_addr": "aE1AjkBoXBfF-PRP2dzRrbYY8cY2OYzeH551nSPRU5M",
 "tags": [],
 "reward_pool": 0,
 "weave_size": 21080508475,
 "block_size": 991723,
 "cumulative_diff": "616416144",
 "hash_list_merkle": "1QVbbLwZHpNMJd8ZghRb13HZfrRu-aIIfzY29r64_yBJAcYv-Kfblv_c2pfKbQBP"
}
```

Copy```
{
 "nonce": "W3Jy4wp2LVbDFhGX_hUjRQZCkTdEbKxz45E5OVe52Lo",
 "previous_block": "YuTyalVBTNB9t5KhuRezcIgxVz9PbQsbrcY4Tpkiu8XBPgglGM_Yql5qZd0c9PVG",
 "timestamp": 1586440919,
 "last_retarget": 1586440919,
 "diff": "115792089039110416381168389782714091630053560834545856346499935466490404274176",
 "height": 422250,
 "hash": "_____8422fLZnBsEsxtwEdpi8GZDHVT-aFlqroQDG44",
 "indep_hash": "5VTARz7bwDO4GqviCSI9JXm8_JOtoQwF-QCZm0Gt2gVgwdzSY3brOtOD46bjMz09",
 "txs": ["IRPCjc_ws7aS5GWp4mwR2k-HuQy-zT_GWrgR6kRdbmI"],
 "tx_root": "lsoo-p3Tj7oblZ-54WVPHoVguqgw5rA9Jf3lLH6H8zY",
 "tx_tree": [],
 "wallet_list": "N5NJtXhgH9bPmXoSopehcr_zqwyPjjg3igel0V8G1DdLk_BYdoRVIBsqjVA9JmFc",
 "reward_addr": "Oox7m4HIcVhUtMd6AUuGtlaOoSCmREUNPyyKQCbz4d4",
 "tags": [],
 "reward_pool": 3026104059201252,
 "weave_size": 407672420044,
 "block_size": 937455,
 "cumulative_diff": "99416580392277",
 "hash_list_merkle": "akSjDrBKPuepJMOhO_S9C-iFp5zn9Glv57HGdN_WPqEToWC0Ukb37Gzs4PDA7oLU",
 "poa": {
  "option": "1",
  "tx_path": "xZ6vhVXw_0BlD-Xkv3KtfnJeLXykjkjUrwcPsXw2JUnie021At7I-fMZkt5EF_xOHtcdq4RIqXto1gwFAM5eZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfDSbuKpWzKZ9HP_N2I4gX6cUujNsJtelJULjHmbZp0XzmkBljlK4S1PMlSrTePIjfJdRfqvFNE8idpnj69X1P0zAfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAn4ybxD6lgdArqnPJzs7t8bU-7KfEb1YqpAOvbr6q3vmP-MWnCTWZJKTL90azeYZmHrTMx-iutuT6bP6CUC7zgHAfGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmTpFIGvz18gKl5rZ6p2Ve4yVeRzWNwibyVTKz80HSBYprfIpVJk9oRG3E5q1xRn5wErqyH2vFLbsLxDqKcR0vLunBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfDwBRWXT_vDxcaBxGmihJwlU_n_PFBCOsP-Lx3hSG6H6UGesIMAEYMmd2c5QixR-fCimhm_9S582cLzSUffsrAHliQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmP-RTrBhY9xCC1yywyehB7X6EmlBjyQBqm0y1L9Ex_dkswkf50rG-LE29UJP4st0bzFthHukfHvvWZY3bgIiog3L7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfD3YxQguhfH8daMBAQrveQq3MMp4iKB3khk5mbU34Ckl1q8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJj_kQ",
  "data_path": "bTVpffiN3SSDeqBEJpKiXegQGKKnprS_AFMh6zz4QRIU-8dJuvFzyKxqjkDHQvtKl0Eajfm18yZsjaAJkNhbAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAOH0cuoLq1CTbSelF9C59C-fcO3a3ywoceaNxRl4nQQH1BuwcpiNdDdZvEz6Pfk5wKbnsF_VwVIgrfcLZgsxoKwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAefOoaNyW7ORmrzbZ5O7midzLByHooxjM5oEMJfZbQsY9mKS14G9fUEFmFaCPPJX6EXVGrUwROzDIWfHf8oHErAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAktmxYyC7BSV-MULrjzgdJJYfJY7lDFcKe3mo_EX19xoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAA",
  "chunk": "aHQ6OTBweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCkgYW5kIChtYXgtd2lkdGg6MTA..."
 }
}
```

Copy```
{
 "usd_to_ar_rate": ["1", "65"],
 "scheduled_usd_to_ar_rate": ["1", "65"],
 "packing_2_5_threshold": "30581055168778",
 "strict_data_split_threshold": "30607159107830",
 "nonce": "byirx1oc0-_7YhQn-ALGBgAAVKmh8Bgmp7OyLtvgruk",
 "previous_block": "R58RTTzEKmSyaqhRik4fvl9AkN3g98QEntvZuoly02uwm8J4fZbcvgv9wEEgN5Ne",
 "timestamp": 1637154761,
 "last_retarget": 1637154761,
 "diff": "115792089200990798889969750100406950138692751005015780350441187278229868977849",
 "height": 812970,
 "hash": "_____6737DxIc6c3tMtRsYRgDfdgOODK83odB3ziOTg",
 "indep_hash": "nIq5881hbLMH5vPsv0mwrP6Je-4-0fp0AOSf2UbsQ1jnoA3SfSOYZm4dd6X3g2lu",
 "txs": [
  "4EsvhIGP6u6GR-kEHdUVhHYYJJyKkV-AGJGHKsVlrGI",
  "ruaiUHWfCs7T4JibsThWfEcPyS5GeUqPBp5IihIGutY",
  "waN_Hd2VvkgF0sV05RbwetZn4WelCKkxO4TMrMRmGIQ",
  "TkM3YodeJmCBqUQ5l05KP_EakVugtLmYNa3L_01qdL4",
  "NIKhWyDeSxgnwz0NU6YdbeuImxKNN0LHRPaCaMI_hyU",
  "oFEv3Us4Xlou8Y2BFshni1HhtVa3yz7Dq2BhSPvaFX0",
  "wDVpAsaXFTxHLHJYN10oLDc8eDu-affzU7hBD42HinQ",
  "f1tWS-CQQGS1hgJbg8lHkeUuLcW95JiMwV9DCq8R93w",
  "cx2_2A-SYqOy3H4xheL6Sw4BYpkHeaejT8CBX-VWmxI",
  "alDLqHTWniFYNQZEQG12dfGzCwoTpQq1OOHxjgauQNI",
  "Gs96AeOjTDw0MCd0ODAdde94hG20VyG6XeztElvFTbQ",
  "M0BceHPA8oJcZHhqBrJCgPzQjLicOUQDa9N5lwATIeQ"
 ],
 "tx_root": "AQP-SjJY8MtBMMFBBbJU1Eoxn6CD5Bh0Z4B6tW1V1IY",
 "wallet_list": "UO7vrGy8Utyw1dwquK4l3Rs066EJ0i7ajoFNC7L20h-9VXWbjl56TmPT_yWnWakF",
 "reward_addr": "-GMnn4oswztJB548o6o9ctdTLHg8Mpusn943kZXhaJM",
 "tags": [],
 "reward_pool": "27384655909087787",
 "weave_size": "30607610781942",
 "block_size": "451674112",
 "cumulative_diff": "2951089982733595",
 "hash_list_merkle": "GgXDIzoQ41V3ZM-VQotjH3IpzwJy_DAh2mfk_yyXPBkNgZ5anApDmsIOr7H43_ZG",
 "poa": {
  "option": "1",
  "tx_path": "e2ipAYDKa-YunBFWV99cSIzGV9FO1aTxaXCtKmPtai5PpzADXBf1BLtDBp2ciPIZFHl0oS-KjDWWgxhv-Bda8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABa58fJUKs6QMpg1ptwBNt6nc_aVlMd4Kd628A4-Fxcr1bqwsOSkM8mXNQpjQHMz1xMwe0n2YOtSBKPx5X883DKBB59mQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACblBWHSGPnCrYdXQRjCE3XO40tV-KTB2kvRpiB3GqgGoNYmzCMAOyrJDHkEmhtjLTJ7-yg3S7iEL6mR-hMqgyXz7gPrQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACxLb2JvCYIx4ERkyJoOYcpCjNC1z4GdgWh0ISsD-1PlAlRODfZ55zP0IhperbkeocXdpoZ6OBaUiajv2cFkq4-BrFz_wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqxhpNH06zea_uKgSVub9j6hPmGoIy12sw3nZ87PfwJhwyJEbnnKGrMfZdF0g0VZCiR14Fwd_vxoeepCU4NZbDtZ6MuwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACicbyeYZNImtaELodhb4pBZ-rM_fLdPFCdhwq9HHxKnAtwz9Uy-3maQzT3TWJHubIGj2n6rM6RwB7IIZt3rcf9UnK8OwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACbrleQWgcbj3MYv_i1gFnYZOrcmtTMbltaEgXMz3zKPz9L0Vv41n7JqyS4407e-BGIvkY2pTG_3VzYiKwLw0qdH_G8pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACe7TTteiSQXwoQioyuO-RMXDjMVQxW89RxJwawXaCzpAh2obAhCUYpjchknyeaURQk6l0azfwjqvzuN73IF8iDThJSrQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACicDjyNmTKPrVLWIg_vH8SlkLopb-APUbG32yw82HZQFJooQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAonA48g",
  "data_path": "lbOSqGDAcekqm0ULAHcSIQQrWR3p22Z9K6i4Tr02mEPs5bthSxAWERDrkAXYUpaN8emeQOaZELzH74xQTH6-4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAADqoN2m3hCFmZRKKhGJFTQuHnZCMHY5W4ugplcETycOg-Ed0URmCG2BZlhkWdHebonivetWOYlAtw_0BX2NZqIwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAhi2cKXN0lzUhaJgGyjUbFnMGjTcJWgymS_hjWtP5RYUQxqYLp28rLzUvkeUhYpMIrIYBXtnmKtW4ZbsFYXG55QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAyEFZMrEuMkhTz2T_WvyJ0JUP6wt8fX0O-nRk4oUCe1R-Po0t34LWpF9PHyHdIoAum8XWs91IAmzjgXu7XQyCjgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAWnL8BlqlQjjTgVxVKlNPZODxBZVZa5RnsUSInsxLHk7RSXzC6Y7BlOoX067N8ZqAiAJyh2SzdnA9j0-iwr548wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAALyUauaExQ60Oej6spAZOlwss00m7vU-cHj3gFYZwoOWC0d8YnVhDEsxhyrDVMu-Pu49vRcoo7XXUrgMWeVKd1QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAe7pHYSp1vPYKvaIy1wSf9zerD8Tmud1_2DJJSFQZaJf0FdFONJ1jSsxhGiN-YTfQ0C1gZBkmByCiYLG-RwaUvgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAHvQ0I2O9LenILtrkV1kSuwqs98roAKpdsSjta7gXOKKzpdUKDTUWeqi4uHNEn4fjniB7MOfVWVb6CI_-xfPZhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAn_DFXGpaRfj2znizeXtph7PQoXhQEPM0yqgRmRwUe_UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAA",
  "chunk": "4FY69JenKk-loETCL7wTv3DGzCkVjTV8x8Mo5w2vxz_mKs4YX8PsB-m..."
 }
}
```

Copy```
{
 "hash_preimage": "zxjxIc7BEGfCZOvhA599qRjuVfnTjnTPP4r2SVnn44I",
 "recall_byte": "20038419977588",
 "reward": "1465707980036",
 "previous_solution_hash": "______DyF1XD_nHsnEh6pdyYJ-0oHn0DCUyqN4Akkx8",
 "partition_number": 5,
 "nonce_limiter_info": {
  "output": "s2a28R-wRiQ-iM53XsYcgydB6sxj1QvDT4SYdBWcW1M",
  "global_step_number": 80,
  "seed": "AM7rbYBtYzJMmX9D5A6LEPAAE02yN-4LzsSKAk459Lpao_M0JUhUK_53Yp6_7bNb",
  "next_seed": "gMsCnK2EimYg8wvEt7BvOFvyFLZGsu5HSJ48cpTklxyzYsMB2E3NDRRAv4mTD1jb",
  "zone_upper_bound": 134783121793270,
  "next_zone_upper_bound": 134792922570998,
  "prev_output": "oJJOt_1wU0qGKC23r95R-OuL5ei_Z4XJrGGG2NPl9qk",
  "last_step_checkpoints": [
   "s2a28R-wRiQ-iM53XsYcgydB6sxj1QvDT4SYdBWcW1M",
   "n8jGN9BxH-_63bDGekTZCVQyigsYhVN2VFfxcTmtWLQ",
   "ZMbGYkazClEaZgQQeeLN0pzTmzvOT6TDFwc4ClLYnfs",
   "FgG2VW4m-gnWwUEsytFWZFa3n0A_cRpXr5tGjaT7iT8",
   "vrOEpUDmPdEtU1rVat9ddRaQFILyXZgPd-VrzvBsi2s",
   "vvdrlyeNLcpUrjpGYzYfGVKWRGQMYLCDXpmDEYO74Hw",
   "r9XhO0mPBImvlNfzWxuxkBz0KHuOrwyGCoX4ugFu09Y",
   "i7CSZDVzuEMaf1zamSr-YcdzFDUBly_WuXdtJdCn7Wk",
   "nJx3ORNUhrc7aXBIBZS5jzMVj0JoyKdn1_H0fUVUWgw",
   "VS_M6lvFUuEAb0XGUb43Zcy5mWj4OqvMDlF7pqgVd_0",
   "1-QEzyO_bjFiGnq59fujRA9dXdRNbzPKIrSHwLs7bOY",
   "JAiHlkIl2KO_oLB3Wmd3Z3mG1pVB7TnObZkjVLa3tQ4",
   "H0vGq1vw54qyyZ8cUJDORzKsP6Ka4fZtEHF2RDbjhtk",
   "D2EMFw_MywM2prEtC9VBY7ABJXYmKklZH3h_7U-QTKE",
   "frqJdF717fyV4fHmlCFQMbnGAnf1ue--0DhCuTwM5iY",
   "y10LgNaDO3_v1-mCrkWm_AcosrLu72_CqlmXqcTVRoQ",
   "na6qGtR67t2ild7LHqtrDiIiLjwSaR4NtXdR9tbGeuU",
   "7k04qTS4utzamCEtiavGdybZGDOXncGUbL7cz-EbUHo",
   "A_8B316ZJ2ynQPKZ4sQsou43-4RTYdhEw8AgqfPENy4",
   "v4_bsH7A7RzrKHf_yXmOGusnwxCX0TqKvN8y-43Thus",
   "9oc9zPu-yBNRIygEuuN1NpylTnhAEVAl7LDQIex4TrA",
   "sUGDC7p_EEa-crTDuLZpfiKmpgp3aGK-Kbo7mLDR_BU",
   "cEo95Mvy5NZAiboJTWa7uW0SUYjqgdaaSYWIcpHv99g",
   "JfQuVzhCZOlFslAwOxO5dT4WCGUb1x-N_a_1DV-KOs4",
   "bCjdytXpTamI8Dn5LHmQHIS86PB5aTG6UxGFvGSUbls"
  ],
  "checkpoints": [
   "s2a28R-wRiQ-iM53XsYcgydB6sxj1QvDT4SYdBWcW1M",
   "8w2UXIcPI-4TMzlLokT6PlLXEt8CvwuUyAh2kvT4l9Q",
   "o3mHmozBtKAW_vs96ANIxaOoul3Td1g6eoR6rvKLV4Y",
   "7M-lVdz0C8JHo3Tx9ZlXG6mlpzlSQyGiMYo4s1LADi0",
   "46ZaCstUm1fVlvgin8b6Md082ydUs2EqhNgx6k3r1ig",
   "uJwPMNNFP_asFzQ24M1nM4LCuL64c3VruVOkUKr2JMc",
   "8ozNKZXisTwwQ2jmcMWQjUm83yVmrTsEkfCZX1dlNBg",
   "ONf3U_542veOtgXykDM5ozxDhl5WtDB7EiTYoPJAgcI",
   "rqyIn_morrYURnbImUx7VieAT1BWiD71jLYWXugBI3o",
   "zfsTWFt7KjjQMfewrrqv8jg5U2N7KiVisG27qsDUSR0",
   "4IQaX7HFRnXFAbtBvUI6YOAWkglVoqVrjZeG4XUVcOg",
   "g5LdQ0EfshaCxrl1ZgyR7E4chksc63l314UanvGfaKA",
   "eeRu4FNtC-xLFW9xC97KEtt6hP0yW0WWOHxQ-xhAScw",
   "1cbBFvlBFey9BbPP3_kf34QijkAxBQQSPM5fDMlKdBM",
   "hbpoPfCNS_hokiOwJOjLV2ktUb4vtRIH-zYAZEi1S1Y",
   "104eeVItYcoebsopnNt-pLnQd86Yw9ewZoTT9TfWXO0",
   "SJv6_zA3lbQbDlstObuKaHGTMc63ov2s3D1TFUgPi54",
   "RQ5-kHJ7duWSto17HJa6pxfAasKVsfU_ZKzo7KQEi9M",
   "IexQqVNJSoTIF3qH9nqZnpfFrKzuPGUK2mutdEuq_jk",
   "V6ikLEujYS4UqDiGrodE6_Cm76FLggWVXNaGNqMpCNs",
   "SO6O36Cxb6MqXOSrpaxRnRkTVohySppVdGJxuvmwLuo",
   "2GSiFs37Qam-sC-qHOODNmDk971JBPi3XVvGRTH6CAk",
   "8FLS2KaDOBvFmdxfbQeVHhxzxNPi5qkIrZTrNbJvX00",
   "Kbp3hCAZXUeztkhkU9tVuhBzHBEXsbKPc4rdhDVaCeI",
   "7wv3TtAizWk0g4BCnlK235aPAaVrz_aIMTT36yknGkw",
   "_Ztkvdyiln7-wdjcpACVruCdvy4UwG93y9Cam73iqGg",
   "x2Xv9GjYeKC0_wqa3DjKX-CB17uZp9IJdHrl8dRFoew",
   "wnOLZndTnQ7Myp77hon0DPoe-PR9HiQKlAuQEdPbof4",
   "q7bP0sGua5zMpHgI_e0-XRb9PHNn_bsNjg1KN1XVmYw",
   "PBtm8ftDalbk5OpcKQfTnFwcmeTm9kg2wOUH0gbgo1g",
   "VEvjbgAIQFxEIAGmhNO6QUsyMKmSVNFN2OHbRXXHrh0",
   "AZUB8jjMwtxrYkguPob0n4PCf3P1yYQgr4pK2CbKQy0",
   "SE7pHN0fiAsFjEFS84MmERhUuAi0ld3M7Ip2tjElDWY",
   "ukCdukTb9LxDlcPdKNElcBaXHsIavK2cChMJUw3Uz1g",
   "FWnsPp-Mb1nMjxU-esQRRzHoSHnsR260ie6FiLPDXSY",
   "AJhvOqQpK_DyGyfaw21fMPPKB0tNRWFGNpg7RX6g4NM",
   "DrUySBtauxDqj9OmdgxArcrKSuNmKKPXohBKZJoUDU8",
   "5t7ah6zqLfq4T1_mF2xGrcXabMdWIaVA9PH-ff9Fk8E",
   "wXM0ihQIvXx9k-FMRhOM172ePwuu0qCBx1YSmYIFvPg",
   "YDtMxHFZg2dSBNVstInQNbzAGf2f_s_DG92DMzEsklI",
   "y_l2J3rryKkoK8OvcJm_zk6nL3VM35rbS6DrdF0bne4",
   "C4z3A-aPvWPsKYZK23mFyXsJ_wfXOivwX4eQzW8L4AU",
   "NATIlXDQq-l9-H0qbQCD5hx1ZYJ2AZHImNIQibLECic",
   "zK_IvJRs4YzGaeLoR_k5_dGgfnUAUe3ZXi6V0GiEJtU",
   "PujjTCaLIyYdXyo82soGz2l4Tf89vCJZX99V8ljw3Pg",
   "WonkHtnh91sJ_94YiH77ZyQIk6iD8NnLNxoVG4A-Tvc",
   "I-ur7MGpI7MdRjdr4ITJs9LhoZaDrbaO-ZyT6bkvGL8",
   "wKc0p7VybSEGU7rHuXJTb1QxlrjF3uvKwYsclvEtl1w",
   "vaCrMtHQ_VHw2oQY0mphbCl-GxMsA_bltHnN3U5v3mw",
   "5Oo-syJG_4i2uqqJQd7LepKVwzunC9GDRDDZ9eLi4CA",
   "qArgC_F6QvYX7RYPojK-oaIWLQ0RyAAlApbFDWfuuy4",
   "Z1jlbha1kGt03MY8rRq7LM41fEjt1XFnqfKKHrLrdAw",
   "m0FXlq5qokRMxtG8WseIE7C8SWaqCNZRRl2r-SwD4zo",
   "PHvWj-3dseMmABYamSy0G2uOeBijC-S8QPuKkR5mkAU",
   "PJaADkiBfNHHD-PBBvslCYd78sgb75vttCRyqbQGjpo",
   "RPuIij4-rRtpUgDQYk51LBtrxJBcHyrEcQXfcileWfM",
   "2mqvvdBZeHabiz4Gmk3JDF2EVj96AnOACj3eS5uFTcw",
   "5po52oX5qd7QVb_C8hhqR6ngU2oPtniq3J9whalzgNs",
   "jgMX-1tbA0TbiR4UzpCAf31Aj7WJg5eFRwM5215qjZM",
   "JTqXNfFsuwjzx2X7vs_cjb_waPtvR-s-KDtxgLUIAXo",
   "bRG0LDix39KujHgpPQ3bb9xfiZDdK0iqYP8lfkb-IS4",
   "YB_gur8BUk39ed-cSVB7agdx2cHJuOkP2dYdHITTwV8",
   "dzAuPGtmp4XaYh-we4fHqisGKgJMIlB7Dr2Mds1_-yM",
   "nG3_3G773uPGoAdTGT1-xCmCaRJrIJNxD-GcQ9rF5Nw",
   "BCIYXrDyabiA5TzmrkmXuN7VO2TtTm2dll5-tPlUtOI",
   "-oZ2BVhhD4pRa2XiYjbLaQ8cZ3cByeqouhaexcdZ0vo",
   "XZ4RV-ZW03ppM2OT6jHd-Vw6F5tTIAOl-xhHdYF4CXg",
   "EoODt3Y-A_6uUjyO7SIWv7dmvvm_R92d5T1ioxD5kZ4",
   "swF9_kdEQ9xHANHvrfS8_002SL1YKBB56LrRJJLf5dw",
   "WMn8p3N35Nsr-9NCIT3Jm2Wy9gwlqh4Yza8f_dibxxM",
   "yZNXdl7xWN5QiXc5aDqZ4828QS8eDEhkBtd7Zu_wqO4",
   "-esBMMucA2ihMvh0Plsa9xAkrCZtKx0WeWaKT8JSfwc",
   "ViA8mtBrUqGrvOxsKKN3VqKV8Y2WHKJNZgZMnX55S9w",
   "wM7YGSJPX2PLa8yiaib9gv9d6tbU30kBzRF287yALHw",
   "dRJm9u7N7Ea3JiXd9c1eOYVYV4FTgSDz5Wj7PF6bwrU",
   "crkNSGwg1XC5Pn_f9jC4y-6930TqAd58eoSyu16E2nE",
   "9rzjzw1ezmMxJbd-vOZslE-e__HOAMYTivqGIzcTd6A",
   "vv-AS6Rd-kokfP8wsGAlz2FpnBoM3j6auH-MuzpCq5Q",
   "jKVMzwIEtFxXJtoUUALDuJV5ki8urWX2I_0g5pXZHLk"
  ]
 },
 "poa2": { "option": "1", "tx_path": "", "data_path": "", "chunk": "" },
 "signature": "Ygl9YMlJMrD_lphxulN_n1Y0FJI8OcjvoPcScgZWvhGtg5zTj9Y9LZYREwZrF4PgUq0ktVeYlG4i-Qv1z1QJYgSn7FMX-8SWvjBzgGERdmyxWSeF-DtAwU3JiiInrtilZDZmw3y0QzXKwyzysUeWXQoL1B2Kj0N9swvuENJmiqfY7yWmvUlTFQO-AHr5FHrHRadH3dMrpbNJ4GlithNmNACjBYiqGnrwxH62d_gdc13G4MG3frITkX8lPf5KPAwenUNE2UZ9kv3Yyihog2PXH7x1lx5dfDBCb8uVsNsNxgHAud1krNpNO8ycq2L6-fmEEvAUvsf-YBqeCXjtMYPacOwzWsmPF--6Ed9VT_Om6mGGf0_XZjzuoDl7vQiafdpgW8dtW9qJD8cCmgf_63pltEDRxSkEp_COho293NR84ggN8sJGbXKH0EBFTIAa_ce-hgUy9wP4e18hoLHVLHK737HpJsaxBLoA-JrOUpWoCGT2T910NrIqMo9G-Wsy7xEiSVPaJGfmU4sRJJcjGAj84U4TPp4XJGYps8n-DdW3C2ZA5xCf7fw8Ic7H1JXqYiGUo3isKYkUD7w-7V_FezcnJ7D_znTH5rfkuEvdp3w3f-ZHyKNCdVIC9m2qC-rVOtOOfwAQtRKBK6T8PYpiQLvg3soOVAqIDoGWRVLe8kIqMl8",
 "reward_key": "2LWWYCT6WKJ_AJoxGqicO5gyLg_joq6kHEU_4K-nPcA3dMCZWs7hDkyQcsFrk5sCtSmjJ2C4Rf1M54jLb21-kSE6rxMYZeWtJDldsFuUyEJ8y99p8MWLQohno9t1BDM9cBVIQh4sbV6A8_P4ICv-rTnVfG2YIfGzsz044vUm3kqKXFJW44kBksoktuXOGVPR0ak03TfKu1PgzHm23Ms4u4Ug3-yyDGoNWrHkCkDf3BIxG8lGHc_UrkjN16oG8UgJviyKzZMg59HBgcUeSrgAnSW36zCtFC03_fpfvA0VQpKPFmVFXNts1bMoyUkW2oCvQMhE-iNQkUwv79BO3_NxZZpqLk7HlfB6gQ_0fxHoEIpUnjM8-PRVNFQCHNZ8zdyCHmEZtA2SLlxocLmA5VNyjNChAThT-xYnNijbLLfs1FHjEV4Q_2PYcvV4w8R9hYcveexgRvEc69dEwM3i9Op9QPVX53u0Wi0bqfnHoVZnrNbIJWbpWrLxwHN2j097QaPl-83Pzg63kF6bkyLlpKNMW6sjGSGOOR1yrnUUUnRrM_t_7BD5ZpKoobcQDcwjuUSzIf_ypz51SytPSEL0Kh8-oK5BPEEpvcAuEoZh-X0EXInIKW0eTRn5G9JiuCydHXy4SKwZBhGvTHHY_ZdynOlKPMNYyt05V9DIqno5DlxCLNk",
 "price_per_gib_minute": "6986",
 "scheduled_price_per_gib_minute": "6986",
 "reward_history_hash": "I190QrZCm05s9aIbt9j6bjFJn1BkNvZVMPEXJ7QFTtI",
 "debt_supply": "0",
 "kryder_plus_rate_multiplier": "1",
 "kryder_plus_rate_multiplier_latch": "0",
 "denomination": "1",
 "redenomination_height": 0,
 "double_signing_proof": {},
 "previous_cumulative_diff": "4369104305356760",
 "usd_to_ar_rate": ["8855", "524288"],
 "scheduled_usd_to_ar_rate": ["1", "10"],
 "packing_2_5_threshold": "0",
 "strict_data_split_threshold": "30607159107830",
 "nonce": "AQ8",
 "previous_block": "gMsCnK2EimYg8wvEt7BvOFvyFLZGsu5HSJ48cpTklxyzYsMB2E3NDRRAv4mTD1jb",
 "timestamp": 1678092233,
 "last_retarget": 1678092233,
 "diff": "115792084401224566807772651152730092358388734887252574358647557874619658061534",
 "height": 1132210,
 "hash": "____09aYjKvcwjKp_Qb444oIiJVpbSxJF3o21jBOwFU",
 "indep_hash": "7OkBVCwRpf-w5B-yKClukNEzDbyV4Cs1Jlc65WmL-uR4gu6ZisocC2gHufg0wHVe",
 "txs": [
  "fzuqZGVS5FvX_EsSxAB670ZLYT4cWGI8Ais-CeF7Sc4",
  "x2jV0Y_g67VCTJxI-BxP9VtHkWbzfKdvRtRUieYCAeo",
  "Kr95NEJ_lhWm_k0iw13G5d0j7-96a03SEAI4BSPTUus",
  "zzaw9uCdk_Ic679oFMzDLKKcnzngROU1GYHSqEBrTN4",
  "6VuOwldWcQKi6DaIIs5zCf5MMLUxKhCY0bf6eZXvYew",
  "2IPzj7-LShrohdJdOttYQJDrL-AQTZ82Xy2ECv829-w",
  "Tw5WQjRhm5JKpzSIefX8OU47eMqG6YdBx7Hy7kwq45o",
  "JJcSEzZU3wOqJNDTTA0bSGO_akvkm6DECLQc78jdKAs",
  "PFfKmEk6q7HNjEzrirrjLMZfVD6vvnNUIvTa12VqIb8",
  "2N9aoBB21Sq7X3e7sn9oK4aRwjQJj-0RZQsdtSPT0_E",
  "WdwA5PGd6Ah5l2BGY0l0pHd7n1q_mzipydhwSqCXvzI",
  "ikTT02RSNwJtD5jHEScfjTkxMa-5tGmvyAPjzWdenL8",
  "oxubxfn5AK3fCQCO-3sKQS1i14AH-iPhswyBWo8rCCw",
  "uNdOaUP70uioo15K2wAlPkJ1H4MkOhhYRTKy81Wzj_U",
  "NsIOyrSB2o3RSMcb2WrfV7xRUfwCEkpnnCvez5FozuM",
  "pyxDgRreB52B-sYv5lS_6EOJhY5EzYaJVp29d1YDB9A",
  "unahGYmRyN8pahTiij9aS1T4Ind0HtpU92lltprIoqg",
  "vG1WlB2y8t_1ePuOt2oRudUoUjjDuQ1HlIeMNH7Nc6Q",
  "UbHFan5Tqwnau4CyiVxEO3DoxzGctr9udIUcqsYAUYM"
 ],
 "tx_root": "jHMSGnQUPqGM21zwVi2EFpJrHmjrLDqyavxodjC61mw",
 "wallet_list": "Y17X1la5YZWup2Q0tn7YQVizb8fs2R8OY1KUmqLayeU_SBEEDTHp9PgtR_90kWS3",
 "reward_addr": "SOtIrcaiJwVs4h3yqXKjOs0P9bNJG5F77y0-TilnQ2U",
 "tags": [],
 "reward_pool": "46030523196756537",
 "weave_size": "134792975261942",
 "block_size": "52690944",
 "cumulative_diff": "4369104329300079",
 "hash_list_merkle": "iMx_IwEe6lEGXGBqFr0NXl5AtQYPb9HILU8FD3nNqXvoqgqvoriXTiSeW7PmtCtF",
 "poa": {
  "option": "1",
  "tx_path": "mTA_E-nj8VL4XjyQp0PX8wmQYHqTTBQ-TQR9p8ySBK9WNjzAci0Wh9FgYIjVgSNhtNz-G8dJfPz-1L1DOoiDIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuuY4QTEhLRfqmYdRvKQ0Ln1c5Fz3zlhqKUBRfpnFPUs1WhbuFCYjZjjZgjv1kILQDY9HQJa6GT1qKdYhPnAHukOIKDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbhl1-TXlZj7Sm7u5ZXWQfd4pUdYeoEMLhe0Nm6YqDrHt6uudfzVBHQ-qnHZtwXYZoTD65f_IYLwN-gO6ygJCwzU566QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASL4xgq6YQAokrDGhdVpXVw1oIwDNvuNOVnxgLeK02xsFp4elqLw2vEwR6uZ4YixqDFunCOSz68pkB-q6Dt3T2r-fRJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWnvsAuuGc3Ra9YSnuHmXpv_Tca7IYW2O3Qb12ojYIbWggC5fUJzChVVm_01A57dvpI3KSBxrofHRWsc9BZU6ecpulBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbf7IdSwQ66LRKwxoIMIQFMI5-fNZJE4ZzQH5r2MEE3zhV1fwZXBxJLfaavp2TI7F9c6gFLdIHxNKGjyye1tq3ucC4vgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWoJCnFnlRI-1gWVLTT6oNSfHB8JehHhdRza0LedElmr9K6wmQQd4guZNFdOUYt-2LRA4HAWCavdRr6eIl28NPJQkiKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWoJ16-86ZLi5VeUTqYq3lCWI-KYwYbJ-TzugMbY7Z5gT3DdIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG3-yHQ",
  "data_path": "TuqqNP9Hk2K6cDU8PDSp_BC5cHvjYJk2KrMM-uP_fOiWOBeOg1n1qdP3k-zDFDZ4YAhylENe6zjR_BA5EvufCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAArDlTG5drIK1C9IeuYvLqv6NmJYbJvxFNoCMeoIZZasMwMUA4MxR3sLjRYwcKtq8L1PQC7-T6GWo3-hcnH958MwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAhKyWpTMsE_StjgwW1PNFdH7xN_SBY14weoeonM_wXsYNJT8IpMkfAXfFiKSn6T55OKeT2Pw2QgEcJMMSW8R1AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAR3a4pdzYsSjFYGc3KC9ZFYxe-lksRbGzoUQGkz9jdeEQtx0uFuPGUGPycoWo-RXyCFJH_Zf4x9880NcG5Y6R0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAlcA-Z6ojqsWBwqJsMk-nibjOtOcKURTzWOd3awrhVRIPeYosVskIql7V-_ix188TrLm-AIjzWtMH7Q44WCzTSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAET9zJFpjrYti3st1dvhztjDsoV1rnc-JdO2HQLsOdIbe8mTHJ8sn-EzKR4WHt-pdW4SdaTeBvTnbaP47ttwI8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAb01i3lbiGlAds8x1ywEBzeb0lUMzGpV8t6AfIm2zLaDVFJIGy4oI4ouX8FXhq5mbXAs8_faexv8cVAUKGADQIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD0AAA9EZm_6-QghTZb3NV2kQZcQJR50VcQPXIdrLXDKveFNWvD4MgV-RVn4_k4gqiRr5QbrxvbjwbS0m-7oStNrAh5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD2AAAs6AhgIw3KFviltC_gBcRfDt_BxxMUlOMDbZcoO_tHsSAaTbg8kiOAXI7ZddFpYlbn3m85-UTIFiSHSzhwuSmsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3AAA7_heFX0YS58BmcACzOdu8u7AjUnht-8OJkpVIm7VwOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA-AAAA",
  "chunk": "vsLWa3iv1i8VxoQN6coorkRAWveASY6brn..."
 }
}
```

## 
Transaction Format
Nodes and gateways accept transactions through the `POST /tx` endpoint. The body must be a JSON encoding of a transaction. Amounts are specified in _winstons_.
Transaction and block identifiers and wallet addresses, among some other fields, are encoded as Base64URL strings when sent over HTTP or put in the URLs or displayed in the block explorers.
**Base64URL is case-sensitive.**
For example, `T414mkfW-EQWEwPtk__LMJAgawNdxZfdjxhGPQKMwDQ`, `t414mkfW-EQWEwPtk__LMJAgawNdxZfdjxhGPQKMwDQ`, and `t414mkfw-eqwewptk__lmjagawndxzfdjxhgpqkmwdq` are three different addresses. It is impossible to recover tokens sent to a different case of the same address.
A transaction may be used for uploading data, transferring tokens, or both.
See the sample transactions below for full examples.
### 
Field Definitions
Name
Required
Serialization Format
Value
`format`
Yes
integer
Currently supported formats are `1` and `2` (often referred to as v1 and v2 respectively). The v1 format is deprecated.
`id`
Yes
Base64URL string
A SHA-256 hash of the transaction signature.
`last_tx`
Yes
Base64URL string
An anchor - a protection against replay attacks. It may be either a hash of one of the last 50 blocks or the last outgoing transaction ID from the sending wallet. If this is the first transaction from the wallet then an empty string may be used. The recommended way is to use the value returned by `GET /tx_anchor`. Two different transactions can have the same last_tx if a block hash is used.
`owner`
Yes
Base64URL string
The full RSA modulus value of the sending wallet. The modulus is the n value from the JWK. The RSA public key.
`tags`
No
array of objects
A list of name-value pairs, each pair is serialized as `{"name": "a BaseURL string", "value":" a Base64URL string"}`. If no tags are being used then use an empty array []. The total size of the names and values may not exceed 2048 bytes. Tags might be useful for attaching a message to a transaction sent to another wallet, for example a reference number or identifier to help account for the transaction.
`target`
No
Base64URL string
The target address to send tokens to (if required). If no tokens are being transferred to another wallet then use an empty string. Note that sending tokens to the owner address is not supported. The address is the SHA-256 hash of the RSA public key.
`quantity`
No
Numerical string (winstons)
The amount to transfer from the owner wallet to the target wallet address (if required).
`data_root`
No
Base64URL string
Only use with `v2` transactions. The merkle root of the transaction data. If there is no data then use an empty string.
`data_size`
No
Numerical string (bytes)
Only use with `v2` transactions. The size in bytes of the transactin data. Use "0" if there is no data. The string representation of the number must not exceed 21 bytes.
`data`
No
Base64URL string
The data to be submitted. If no data is being submitted then use an empty string. For `v2` transactions there is no need, although it is possible, to use this field even if there is data (means, `data_size` > 0 and `data_root` is not empty). In `v1` transactions, data cannot be bigger than 10 MiB. In `v2` transactions, the limit is decided by the nodes. At the time this was written, all nodes in the network accept up to 12 MiB of data via this field.
`reward`
Yes
Numerical string (winstons)
The transaction fee. See the price endpoint docs for more info.
`signature`
Yes
Base64URL string
An RSA signature of a merkle root of the SHA-384 hashes of transaction fields (except for id, which is the hash of the signature). See Transaction Signing for more.
## 
Sample Transactions
Data transactionWallet to wallet AR TransferWallet to wallet AR transfer with data
Copy```
{
 "format": 2,
 "id": "BNttzDav3jHVnNiV7nYbQv-GY0HQ-4XXsdkE5K9ylHQ",
 "last_tx": "jUcuEDZQy2fC6T3fHnGfYsw0D0Zl4NfuaXfwBOLiQtA",
 "owner": "posmE...psEok",
 "tags": [],
 "target": "",
 "quantity": "0",
 "data_root": "PGh0b...RtbD4",
 "data": "",
 "data_size": "1234235",
 "reward": "124145681682",
 "signature": "HZRG_...jRGB-M"
}
```

Copy```
{
 "format": 2,
 "id": "UEVFNJVXSu7GodYbZoldRHGi_tjzNtNcYjeSkxKCpiE",
 "last_tx": "knQ5gf4Z_3i-NQ6_jFT2a9zShUOHh4lDZoAUzsWMxMQ",
 "owner": "1nPKv...LjJMc",
 "tags": [{ "name": "BBBB", "value": "AAAA" }],
 "target": "WxLW1MWiSWcuwxmvzokahENCbWurzvwcsukFTGrqwdw",
 "quantity": "46598403314697200",
 "data": "",
 "data_root": "",
 "data_size": "0",
 "reward": "321179212",
 "signature": "OYIJU...j9Mxc"
}
```

Copy```
{
 "format": 2,
 "id": "3pXpj43Tk8QzDAoERjHE3ED7oEKLKephjnVakvkiHF8",
 "last_tx": "NpeIbi93igKhE5lKUMhH5dFmyEsNGC0fb2Qysggd-kM",
 "owner": "posmE...psEok",
 "tags": [],
 "target": "pEbU_SLfRzEseum0_hMB1Ie-hqvpeHWypRhZiPoioDI",
 "quantity": "10000000000",
 "data_root": "PGh0b...RtbD4",
 "data_size": "234234",
 "data": "VGVzdA",
 "reward": "321579659",
 "signature": "fjL0N...f2UMk"
}
```

## 
Transaction Signing
Transaction signatures are generated by computing a merkle root of the SHA-384 hashes of transaction fields: `format`, `owner` , `target` , `data_root`, `data_size`, `quantity`, `reward`, `last_tx`, `tags`, then signing the hash. Signatures are **RSA-PSS** with **SHA-256** as the hashing function.
## 
Key Format
Arweave uses the JSON Web Key (JWK) format (RFC 7517) with 4096 length RSA-PSS keys. This JWK format allows for cryptographic keys to be represented as a JSON object where each property represents a property of the underlying cryptographic key. It's widely supported with libraries for most popular languages. It's possible to convert a JWK to a PEM file or other crypto key file format, support for this this will vary from language to language. If you're generating your own keys manually the **public exponent (e) must be 65537**. If any other value is used the transactions signed by these keys will be invalid and rejected.
### 
Addressing
The `n` value is the public modulus and is used as the transaction owner field, and the address of a wallet is a Base64URL encoded SHA-256 hash of the `n` value from the JWK.
### 
Sample JWK
The address for this wallet is `GRQ7swQO1AMyFgnuAPI7AvGQlW3lzuQuwlJbIpWV7xk`.
Copy```
{
 "kty": "RSA",
 "e": "AQAB",
 "n": "ovFF6EbOtXeg7VnojIgtChgxfU6GZ16JjVj5JFHh6NGHJnq4p059BnMphcDx1mqb3yxM73FxhEszSFLcJiPzway6eIDiXuYiT-Sf_0Wl6_wDLvEmlz43psp7WYJumwpaSyiI_1FWmOVQnTnoAIKaOYKVqzUlteiECQj7XjJl0MZH16RlEfVqVpJ_8Ier4_QXIJ8Y3pe2KF3Lg9UANFU97nuvEM94CSzX-0WIju6Lykt3DBb2YtFFg4bJjOFv3T38nCZmDh8lYjm25_1qILalsB0XRoDxQy9FLxWb4zd09JsDhL0EYAQ_hNfOnQFVOBtYEHVYMCHYH6GoTcNgxmUkZPk4AfpAqZmjDzKfVJrw4Fr68pPTEQOQEzBcIWp61P21BSkhqO4QuFinkQsSH6NdTB_3FpbhYf34Hjf-iH7hdpdWo4aoRLb8eZeZcqBRZoRmlhQnOD-PVxQR_vb9rjXSjGkCWwRbsurVLWdBh_FQn0S9Q6EHqiV8nbW-R0Rk2E76JwgMFkqGUtZj8DeEqXJ2jlAvuzp56fXeAViPEtvUj1HheO8O3LxdVYCiapWWKq4qQVoRzdiyvydYSmbztgFUhekvmjNkxLNKOh71i3hFtoXycegqZ6izrUGoF2oD24lsTKsV5lV5pwfmUjVvxtHZm54bJIMfUDYbOV6yeDjYBb8",
 "d": "EePSrJeFn4f0a8rozPEwnMCeQmdKO3Q2PwYrSJES8Ch9IbzspDXqZThksTJHeya2WXD4O3vlnkRRa5npYOimnTeVO6DO-eNjlgkAhhsEBh5jzRYeChIDMzVdCK1Y7n3a_xCCxiGMk_nteW2_qrqsKy9KtoL90nSmdoV9b9CxvBPhFGyQykF7POkV0fdbaIpGtcayCNJ4ZgMyUpWi0ZwgUhxTUtGsmLlLN2Phg-vt_jZ96h5lS-E1NCUq4ORpj018fDp9DwTdamTyz5LTwaa8F1OCWDPVCW7Ztjs1o-NVXHvejYbhQZeFz9SP804PqLrb1ubDWXmFzKdHns4aRH4bWivh9L8HwSJUl5UEXprJUpYilT0tb3VauI7Cih2LBfhU3fUIDJFYm_j9etgNcPlqt64T7_TI8elgj7-sciXa1XEqIje9Mn8spxT6lpn4nhxJ9qelERCJwiWbuPnW2VsJHeqXZTly52KQEP_UBC4z8a0tDm7HIQw7WQ-OAuNUOu8ongOHaOexkqKYIcF3f812sOIVEJufoBXUUTIvJk-buH0ytgtTjkrO64zZeIvFHa1MFU-6UXh8jipSZ617znNR2Pc1-l3s7pACdbXvy2-5VWE3psRr1L5HM4KNwm6Rs5BXXqBSifzfiJ5qNGqKabfXvPXI8wYyl3mhUQtHW6sUUl0",
 "p": "0q_DP_FzSi8JEd-NNXoIaeL5MOxmNiXmDHGNxP3noKPyr-N6h3CrK5G59Rj2vWAJMhKToz1eSQ1p0-X0Ku2DvdT5LQOGIXVPtojw0OcOI8G8SoqMGAGehaLsnV3vexwtwjLfIM99XccKAxWMA1SMuL48nuBpMUhO0MlagbrL5vfpKB9kL7XCQqspAnN_vBmQZGWYczQmBgfC6v6xGQV3xHJmL--dn-qF2XU9pKuqd0J-cKYcdLPrccdJtGLid4nrSOTDfEbr77IUI5VGWV8CFJ-n8Vki-GwUxUkJpIoRyp5DxnYtSJb7cV-xOf7kBTCEUFn5B8fb2q-d8011cgnp5Q",
 "q": "xfzB-Yf4fa2y2q4ubJCJA5H-IG9-mr7fVRTUbj-gTqVL-I7MCDIImdAPbA-3EoIR5H70GVbAFGQJyYDq6eDeTbNs1zfnU0JPurASE3fKbOpoRdLwXwaSdRJRP9qnqUe-BzuloIzWc-dI-6TJxmHUSA1X9CtHvIdfNdKPCVFKUMrb1bv5arAI8tRbNRfy3tnbiw4wfKhYEQ1e6RPpxAR5F4We9RJ81-sIlfAy7WfliwmcGmgcPNdUinGR299CiVYKf5ktoqGFQ9n6K-v4gNZV23f33-tuD8pMVxyc3xG34j4frH57bsbm7v8Qz-92ZxHWzOUgxIVhGgSaa4E51d9m0w",
 "dp": "yArepo4I230BbZkHKKlv56n81PkAq5UccuA2rb4u-ZXxThP9OTA_NiUtnYxQassOsB53U91m8pHr06hZR5ExL0NSO-1Go-oQ_83SaWeZQ1YmA9i83-ZZr6VcaKbSReAhimxm825PKIVd-kOxJ1BWNOtb_7Yv6v0u6IrmhproE6t8E_6KT8qSYl7Fl3A27lCPiuPz9h6jo8Imzp15ZbqNV1cPs6Ad18MDx8_L8diVCJt4FlmCV0Sl3uhMERx6zumDHzkma4-jYXmCKa8Ilr7g6NgWy8_Ipnto1VFd-H6oGexficaXhH7my2UCj4B23H6OgwSKsVqQY3mvzV3Uj6zeCQ",
 "dq": "a0_ey6OZWnWFleYHH60PtrGw7l_AXZvLbVBG_CLcfwQ1M1oi2OZVpxkQ4t95uTxq-lCdegZ9QhAfBessaOwLUk5IVjbk2Un98RByG784JuS-8-mrg7YKOA5fn56idax_IWiBE46Cxnu8ITlmbHKmHw-sdpnm3hb50jB4evJmt3fcw_KI8_zKPORBM3vxljy7NJnSSh7s7QE0Sl0Svb427Drut6L3rAimtK5mzCseTcg9pkp707ZbClcYWfafF9VdB2A9TgMCOo6xfJEANsT18GkMH4B6PXDHBAhsNrRh2O0XOeWsfZStoyj5Mdt3b9JJfPFMW3h38yQ_lrmKYZQfJQ",
 "qi": "aDsPYxE-JBYsYhCYXSU7WsCrnFxNsRpFMcYXdmdryYIdQUpeemChDGzVJXLnJhE4cAS9TtLcNg82xZSKZvHrnkbFpRfSJxzEnvIXW4V0LHkxkxbmM0e9B7UrpYm6LKtvEY6I7L8wHFpHdOwV6NjY925oULEV156X0r55V7N0XF-jy3rbm71DCWRh6IDRghhCZQ3aNgJxE-OtnABqasaY6CQnTDRXLkGE0kq9GCx85-92fQLHMzvrMhr9m_2MHYJ_gZehL4j95CQzhD3Zh602D0YYYwRSsU4h5HGjlmN52pe-rfTLgwCJq5295s7qUP8TTMzbZAOM_hehksHpAaFghA"
}
```

## 
AR and Winston
Winston is the smallest possible unit of AR, similar to a satoshi in Bitcoin, or wei in Ethereum.
**1 AR** = 1000000000000 Winston (12 zeros) and **1 Winston** = 0.000000000001 AR.
The HTTP API will return all amounts as winston strings, this is to allow for easy interoperability between environments that do not accommodate arbitrary-precision arithmetic.
JavaScript for example stores all numbers as double precision floating point values and as such cannot natively express the integer number of winston. Providing these values as strings allows them to be directly loaded into most 'bignum' libraries.
## 
Transactions
Endpoints for interacting with transactions and related resources.
## 
Get Transaction by ID
`GET` `https://arweave.net/tx/{id}`
Get a transaction by its ID.
#### 
Path Parameters
Name
Type
Description
id*
String
Transaction ID
#### 
Headers
Name
Type
Description
Accept
String
application/json
200 202 400 404 
Copy```
{
 "format": 2,
 "id": "BNttzDav3jHVnNiV7nYbQv-GY0HQ-4XXsdkE5K9ylHQ",
 "last_tx": "jUcuEDZQy2fC6T3fHnGfYsw0D0Zl4NfuaXfwBOLiQtA",
 "owner": "posmE...psEok",
 "tags": [],
 "target": "",
 "quantity": "0",
 "data_root": "PGh0b...RtbD4",
 "data_size": "123",
 "reward": "124145681682",
 "signature": "HZRG_...jRGB-M"
}
```

Copy```
pending
```

Copy```
Invalid hash.
```

Copy```
Not Found.
```

The **quantity** and **reward** values are always represented as winston strings.
See the Transaction Format section for details about transaction structure and contents, with examples.
## 
Get Transaction Status
`GET` `https://arweave.net/tx/{id}/status`
Gets the status of a transaction
#### 
Path Parameters
Name
Type
Description
id*
String
Transaction ID
#### 
Headers
Name
Type
Description
Accept
String
application/json
200 
Copy```
{
 "block_height": 641606,
 "block_indep_hash": "akLaom7XAKYvIW7HPCtCqSCgYTGAa0zjer6FXvF8lX0pAPzcHMZj4XnQq0jaedT6",
 "number_of_confirmations": 12
}
```

## 
Get Transaction Field
`GET` `https://arweave.net/tx/{id}/{field}`
Get a single field from a transaction.
#### 
Path Parameters
Name
Type
Description
id*
String
Transaction ID
id*
String
Field name, acceptable values: id, last_tx, owner, tags, target, quantity, data, data_root, data_size, reward, signature.
#### 
Headers
Name
Type
Description
Accept
String
application/json
200 202 400 404 
Copy```
jUcuEDZQy2fC6T3fHnGfYsw0D0Zl4NfuaXfwBOLiQtA
```

Copy```
pending
```

Copy```
Invalid hash.
```

Copy```
Not Found.
```

## 
Get Transaction Data
`GET` `https://arweave.net/{id}`
Get the decoded data from a transaction.
The `Content-Type` will default to the one specified in a tag with tag-name `Content-Type`.
You can also get the data with a different `Content-Type` response, by doing:
## 
Get Transaction Data with extension
`GET` `https://arweave.net/tx/{id}/data.{extension}`
Get the decoded data from a transaction with specific mime extension.
#### 
Path Parameters
Name
Type
Description
id*
String
Transaction ID
extension*
String
Mime extension (example: ".html", ".txt", ".jpg")
200 202 400 404 
Any extension can be specified depending on the clients use case. Web pages can be requested with data.html
Copy```
<html
 lang="en-GB"
 class="b-pw-1280 no-touch orb-js id-svg bbcdotcom ads-enabled bbcdotcom-init bbcdotcom-responsive bbcdotcom-async bbcdotcom-ads-enabled orb-more-loaded bbcdotcom-group-5"
 id="responsive-news"
>
 <meta charset="utf-8" />
 <meta
  name="viewport"
  content="width=device-width, initial-scale=1, user-scalable=1"
 />
 ...
</html>
```

Copy```
pending
```

Copy```
Invalid hash.
```

Copy```
Not Found.
```

A `Content-Type` tag-name can be submitted with a transaction, the tag-value will then be used as the `Content-Type` header when serving the data response, this allows you to submit binary files like images and have them served with correct content type headers over HTTP.
The default Content-Type is **application/octet-stream**.
## 
Get Transaction Price
`GET` `https://arweave.net/price/{bytes}/{target}`
This endpoint is used to calculate the minimum fee (reward) for a transaction of a specific size, and possibly to a specific address.This endpoint should always be used to calculate transaction fees as closely to the submission time as possible. Pricing is dynamic and determined by the network, so it's not always possible to accurately calculate prices offline or ahead of time. **Transactions with a fee that's too low will simply be rejected**.
#### 
Path Parameters
Name
Type
Description
bytes*
String
The number of bytes to go into the transaction data field. **If sending AR to another wallet with no data attached, then 0 should be used**.
target
String
The target wallet address if sending AR to another wallet.
#### 
Headers
Name
Type
Description
Accept
String
application/json
200 
Copy```
10000
```

**An extra fee is taken for the first transaction sent to a new wallet address.** This is intentional and to discourage wallet spam.
### 
Examples
To get a fee for sending 10 AR to a wallet with address `abc` consult `/price/0/abc`.
To upload 123 bytes without transferring tokens consult `/price/123`.
To send some AR to the "abc" wallet and upload 123 bytes of data query `/price/123/abc`.
## 
Submit a transaction
`POST` `https://arweave.net/tx`
Submit a new transaction to the network.The request body should be a JSON object with the attributes described in Transaction Format.
#### 
Headers
Name
Type
Description
Accept
String
application/json
Content-Type
String
application/json
200 208 400 429 503 
Copy```
OK
```

Copy```
Transaction already processed.
```

Copy```
Transaction verification failed.
```

Copy```
Too Many Requests
```

Copy```
Transaction verification failed.
```

**Find more information** about these fields and examples in the Transaction Format section.
## 
Wallets
Endpoints for getting information about a wallet.
## 
Get a Wallet Balance
`GET` `https://arweave.net/wallet/{address}/balance`
Get the balance for a given wallet. Unknown wallet addresses will simply return 0.
#### 
Path Parameters
Name
Type
Description
address
String
Wallet address
200 400 
Copy```
9554799572505
```

Copy```
Invalid address.
```

## 
Get Last Transaction ID
`GET` `https://arweave.net/wallet/{address}/last_tx`
Get the last outgoing transaction for the given wallet address.
#### 
Path Parameters
Name
Type
Description
address
String
Wallet address
200 400 
Copy```
7SRpf0dWDqN4hbnCMPkdg02u_tzyMBtqwjDBy3EU9dg
```

Copy```
Invalid address.
```

## 
Blocks
Endpoints for getting blocks and block data.
## 
Get Block by (hash) ID
`GET` `https://arweave.net/block/hash/{id}`
Get a block by its id/hash (idep_hash).
#### 
Path Parameters
Name
Type
Description
id
String
The block hash (indep_hash).
#### 
Headers
Name
Type
Description
Accept
String
application/json
X-Block-Format
String
2
200 404 
Copy```
{
 "nonce": "W3Jy4wp2LVbDFhGX_hUjRQZCkTdEbKxz45E5OVe52Lo",
 "previous_block": "YuTyalVBTNB9t5KhuRezcIgxVz9PbQsbrcY4Tpkiu8XBPgglGM_Yql5qZd0c9PVG",
 "timestamp": 1586440919,
 "last_retarget": 1586440919,
 "diff": "115792089039110416381168389782714091630053560834545856346499935466490404274176",
 "height": 422250,
 "hash": "_____8422fLZnBsEsxtwEdpi8GZDHVT-aFlqroQDG44",
 "indep_hash": "5VTARz7bwDO4GqviCSI9JXm8_JOtoQwF-QCZm0Gt2gVgwdzSY3brOtOD46bjMz09",
 "txs": ["IRPCjc_ws7aS5GWp4mwR2k-HuQy-zT_GWrgR6kRdbmI"],
 "tx_root": "lsoo-p3Tj7oblZ-54WVPHoVguqgw5rA9Jf3lLH6H8zY",
 "tx_tree": [],
 "wallet_list": "N5NJtXhgH9bPmXoSopehcr_zqwyPjjg3igel0V8G1DdLk_BYdoRVIBsqjVA9JmFc",
 "reward_addr": "Oox7m4HIcVhUtMd6AUuGtlaOoSCmREUNPyyKQCbz4d4",
 "tags": [],
 "reward_pool": 3026104059201252,
 "weave_size": 407672420044,
 "block_size": 937455,
 "cumulative_diff": "99416580392277",
 "hash_list_merkle": "akSjDrBKPuepJMOhO_S9C-iFp5zn9Glv57HGdN_WPqEToWC0Ukb37Gzs4PDA7oLU",
 "poa": {
  "option": "1",
  "tx_path": "xZ6vhVXw_0BlD-Xkv3KtfnJeLXykjkjUrwcPsXw2JUnie021At7I-fMZkt5EF_xOHtcdq4RIqXto1gwFAM5eZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfDSbuKpWzKZ9HP_N2I4gX6cUujNsJtelJULjHmbZp0XzmkBljlK4S1PMlSrTePIjfJdRfqvFNE8idpnj69X1P0zAfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAn4ybxD6lgdArqnPJzs7t8bU-7KfEb1YqpAOvbr6q3vmP-MWnCTWZJKTL90azeYZmHrTMx-iutuT6bP6CUC7zgHAfGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmTpFIGvz18gKl5rZ6p2Ve4yVeRzWNwibyVTKz80HSBYprfIpVJk9oRG3E5q1xRn5wErqyH2vFLbsLxDqKcR0vLunBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfDwBRWXT_vDxcaBxGmihJwlU_n_PFBCOsP-Lx3hSG6H6UGesIMAEYMmd2c5QixR-fCimhm_9S582cLzSUffsrAHliQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmP-RTrBhY9xCC1yywyehB7X6EmlBjyQBqm0y1L9Ex_dkswkf50rG-LE29UJP4st0bzFthHukfHvvWZY3bgIiog3L7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfD3YxQguhfH8daMBAQrveQq3MMp4iKB3khk5mbU34Ckl1q8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJj_kQ",
  "data_path": "bTVpffiN3SSDeqBEJpKiXegQGKKnprS_AFMh6zz4QRIU-8dJuvFzyKxqjkDHQvtKl0Eajfm18yZsjaAJkNhbAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAOH0cuoLq1CTbSelF9C59C-fcO3a3ywoceaNxRl4nQQH1BuwcpiNdDdZvEz6Pfk5wKbnsF_VwVIgrfcLZgsxoKwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAefOoaNyW7ORmrzbZ5O7midzLByHooxjM5oEMJfZbQsY9mKS14G9fUEFmFaCPPJX6EXVGrUwROzDIWfHf8oHErAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAktmxYyC7BSV-MULrjzgdJJYfJY7lDFcKe3mo_EX19xoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAA",
  "chunk": "aHQ6OTBweH1..."
 }
}
```

Copy```
Block not found.
```

## 
Get Block by Height
`GET` `https://arweave.net/block/height/{height}`
Get a block by its height.
#### 
Path Parameters
Name
Type
Description
height*
String
The block height.
#### 
Headers
Name
Type
Description
Accept
String
application/json
X-Block-Format
String
2
200 404 
Copy```
{
 "nonce": "W3Jy4wp2LVbDFhGX_hUjRQZCkTdEbKxz45E5OVe52Lo",
 "previous_block": "YuTyalVBTNB9t5KhuRezcIgxVz9PbQsbrcY4Tpkiu8XBPgglGM_Yql5qZd0c9PVG",
 "timestamp": 1586440919,
 "last_retarget": 1586440919,
 "diff": "115792089039110416381168389782714091630053560834545856346499935466490404274176",
 "height": 422250,
 "hash": "_____8422fLZnBsEsxtwEdpi8GZDHVT-aFlqroQDG44",
 "indep_hash": "5VTARz7bwDO4GqviCSI9JXm8_JOtoQwF-QCZm0Gt2gVgwdzSY3brOtOD46bjMz09",
 "txs": ["IRPCjc_ws7aS5GWp4mwR2k-HuQy-zT_GWrgR6kRdbmI"],
 "tx_root": "lsoo-p3Tj7oblZ-54WVPHoVguqgw5rA9Jf3lLH6H8zY",
 "tx_tree": [],
 "wallet_list": "N5NJtXhgH9bPmXoSopehcr_zqwyPjjg3igel0V8G1DdLk_BYdoRVIBsqjVA9JmFc",
 "reward_addr": "Oox7m4HIcVhUtMd6AUuGtlaOoSCmREUNPyyKQCbz4d4",
 "tags": [],
 "reward_pool": 3026104059201252,
 "weave_size": 407672420044,
 "block_size": 937455,
 "cumulative_diff": "99416580392277",
 "hash_list_merkle": "akSjDrBKPuepJMOhO_S9C-iFp5zn9Glv57HGdN_WPqEToWC0Ukb37Gzs4PDA7oLU",
 "poa": {
  "option": "1",
  "tx_path": "xZ6vhVXw_0BlD-Xkv3KtfnJeLXykjkjUrwcPsXw2JUnie021At7I-fMZkt5EF_xOHtcdq4RIqXto1gwFAM5eZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfDSbuKpWzKZ9HP_N2I4gX6cUujNsJtelJULjHmbZp0XzmkBljlK4S1PMlSrTePIjfJdRfqvFNE8idpnj69X1P0zAfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAn4ybxD6lgdArqnPJzs7t8bU-7KfEb1YqpAOvbr6q3vmP-MWnCTWZJKTL90azeYZmHrTMx-iutuT6bP6CUC7zgHAfGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmTpFIGvz18gKl5rZ6p2Ve4yVeRzWNwibyVTKz80HSBYprfIpVJk9oRG3E5q1xRn5wErqyH2vFLbsLxDqKcR0vLunBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfDwBRWXT_vDxcaBxGmihJwlU_n_PFBCOsP-Lx3hSG6H6UGesIMAEYMmd2c5QixR-fCimhm_9S582cLzSUffsrAHliQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmP-RTrBhY9xCC1yywyehB7X6EmlBjyQBqm0y1L9Ex_dkswkf50rG-LE29UJP4st0bzFthHukfHvvWZY3bgIiog3L7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfD3YxQguhfH8daMBAQrveQq3MMp4iKB3khk5mbU34Ckl1q8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJj_kQ",
  "data_path": "bTVpffiN3SSDeqBEJpKiXegQGKKnprS_AFMh6zz4QRIU-8dJuvFzyKxqjkDHQvtKl0Eajfm18yZsjaAJkNhbAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAOH0cuoLq1CTbSelF9C59C-fcO3a3ywoceaNxRl4nQQH1BuwcpiNdDdZvEz6Pfk5wKbnsF_VwVIgrfcLZgsxoKwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAefOoaNyW7ORmrzbZ5O7midzLByHooxjM5oEMJfZbQsY9mKS14G9fUEFmFaCPPJX6EXVGrUwROzDIWfHf8oHErAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAktmxYyC7BSV-MULrjzgdJJYfJY7lDFcKe3mo_EX19xoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAA",
  "chunk": "aHQ6OTB..."
 }
}
```

Copy```
Block not found.
```

## 
Network and Node State
Endpoints for getting information about the current network and node state.
## 
Network Info
`GET` `https://arweave.net/info`
Get the current network information including height, current block, and other properties.
#### 
Headers
Name
Type
Description
Accept
String
application/json
200 
Copy```
{
 "network": "arweave.N.1",
 "version": 5,
 "release": 43,
 "height": 551511,
 "current": "XIDpYbc3b5iuiqclSl_Hrx263Sd4zzmrNja1cvFlqNWUGuyymhhGZYI4WMsID1K3",
 "blocks": 97375,
 "peers": 64,
 "queue_length": 0,
 "node_state_latency": 18
}
```

## 
Peer list
`GET` `https://arweave.net/peers`
Get the list of peers from the node. Nodes can only respond with peers they currently know about, so this will not be an exhaustive or complete list of nodes on the network.
#### 
Headers
Name
Type
Description
Accept
String
application/json
200 
Copy```
["127.0.0.1:1984", "0.0.0.0:1984"]
```

## 
Chunks
## 
Upload Chunks
`POST` `https://arweave.net/chunk`
Upload Data Chunks.
Example json-data payload:
#### 
Headers
Name
Type
Description
Accept
String
application/json
Content-Type
String
application/json
200 400 
Copy```
OK
```

When chunk is bigger than 256 KiB.
Copy```
{ "error": "chunk_too_big" }
```

or
When the proof is bigger than 256 KiB.
Copy```
{ "error": "data_path_too_big" }
```

or
When the offset is bigger than 2 ^ 256.
Copy```
{ "error": "offset_too_big" }
```

or
When the data size is bigger than 2 ^ 256.
Copy```
{ "error": "data_size_too_big" }
```

or
When `data_path` is bigger than the chunk. **NOTE:** If the original data is too small, it should not be uploaded in chunks. Also, this does not apply to chunks which are the only chunks of their transaction and to the last chunk of every transaction.
Copy```
{ "error": "chunk_proof_ratio_not_attractive" }
```

or
When the node hasn’t seen the header of the corresponding transaction yet.
Copy```
{ "error": "data_root_not_found" }
```

or
The corresponding transaction is pending and it is either of:
Note: The values above are default values, any node may configure bigger limits.
Copy```
{ "error": "exceeds_disk_pool_size_limit" }
```

or
Copy```
{ "error": "invalid_proof" }
```

Note that `data_size` is requested in addition to data root, because one may submit the same data root with different transaction sizes. To avoid chunks overlap, data root always comes together with the size.
## 
Download Chunks
## 
Get Transaction Data
`GET` `https://arweave.net/tx/{id}/data`
The endpoint serves data regardless of how it was uploaded
#### 
Path Parameters
Name
Type
Description
id
String
Transaction ID
200 400 503 
Copy```
<Base64URL encoded data>
```

Copy```
tx_data_too_big
```

When the node has not joined the network yet.
Copy```
{ "error": "not_joined" }
```

or
Copy```
{ "error": "timeout" }
```

## 
Get Transaction Offset and Size
`GET` `https://arweave.net/tx/{id}/offset`
Get the absolute end offset and size of the transaction
Note that the client may use this information to collect transaction chunks. Start with the end offset and fetch a chunk via `GET /chunk/<offset>`. Subtract its size from the transaction size, if there are more chunks to fetch, subtract the size of the chunk from the offset and fetch the next chunk.
#### 
Path Parameters
Name
Type
Description
id
String
Transaction ID
200 400 503 
Copy```
{ "offset": "...", "size": "..." }
```

Copy```
{ "error": "invalid_address" }
```

When the node has not joined the network yet.
Copy```
{ "error": "not_joined" }
```

or
Copy```
{ "error": "timeout" }
```

PreviousGetting StartedNextQuickstart Guide
Last updated 1 year ago
Was this helpful?
This site uses cookies to deliver its service and to analyse traffic. By browsing this site, you accept the privacy policy.
AcceptReject
