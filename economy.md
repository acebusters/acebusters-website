---
layout: default
---

Bootstrapping a Stable Coin Economy
Acebusters contracts explained by example
Audience
Founding team, investors, auditors.

Simpler explanations and partial concepts for other audiences should be derived from this document. 
Introduction
A stable coin can simplify the use of a service and reduce the mental cost for non-crypto users, yet, it is difficult to create economically. What makes it hard is that pegged currency is a promise for a certain value at any time, and needs some asset to back such a promise. We see few stable coins in existence:

Tether: a colored-coin implementation pegging to the value of fiat by holding a full reserve of fiat in a traditional bank account. This model replaces the exchange rate risk with counterparty risk.

Steem Dollar: issued as debt note to the seem economy, promising to pay Steem tokens at market price of $1. This model removes the central counterparty risk and replaces it with a market counterparty. The risk here is the black swan scenario.

The Steem model is obviously more desirable for its decentralized properties. The flipside is that reducing the risk of a black swan scenario requires the economy to be substantial in size and have low volatility in price.

This document describes how the Acebusters economy will be bootstrapped through multiple funding rounds to acquire enough velocity and collateral to put ABD, its stable coin, into existence.
Black Swan Scenario
When issuing debt, there is a chance that all creditors will want to claim their promises at the same time. Very likely a bank-run will occur, when creditors notice that debtor is running into partial reserve.
The situation is complicated when the collateral is free-floating in price to the unit of debt. When the market price of the collateral dips and creditors claim their promises to sell, they are putting more sell pressure on the price of the collateral, forcing the debtor to return more and more collateral to debtors claiming further promises. If this self reinforcing spiral continues, the debtor will eventually not be able to satisfy promises, breaking any peg previously assigned to the debt.

Let’s quantify the risk for different debt levels:

Debt ratio 50%:
reserve    price            debt         result of bank run
10 NTZ     100$ / NTZ   500ABD   => -5 NTZ
10 NTZ     75$ / NTZ     500ABD   => -6.67 NTZ
10 NTZ     50$ / NTZ     500ABD   => -10 NTZ Broke!!!

Let’s assume we hold total collateral of 10NTZ at a price of 100$ each. We issue debt in a volume of $500. When all creditors call their debt when the market price hasn’t change, we obviously lose half of the reserve (-5 NTZ).
When collateral price goes down 25%, we pay 66% of total collateral.
When collateral price more than halves, we will not be able to make our creditors whole. 

Debt ratio 20%:
Cap        price            debt             result of bank run
10ETH     100$/ETH     200ABD   => -2Eth
10ETH     50$/ETH     200ABD   => -4Eth
10ETH     20$/ETH     200ABD   => -10ETH Broke!!!

Reducing the ratio of debt to collateral, we can absorb bigger price swings. 

Debt ratio 10%:
Cap        price            debt             result of bank run
10ETH     100$/ETH     100ABD   => -1Eth
10ETH     50$/ETH     100ABD   => -2Eth
10ETH     20$/ETH     100ABD   => -5Eth
10ETH     10$/ETH     100ABD   => -10ETH Broke!!!

Obviously, we don’t want to come even close to spending our reserve. Keeping the volatility of crypto markets in mind, where swings of 50% are often to be seen. Any debt-to-reserve ratio (measured unit of debt) above 10% is irresponsible.





Controlling the Debt Ratio

ICO Timeline Overview
<describe an overview of the interaction the “Booting Up the Economy” section in a paragraph.
So basically you should have:
Introduction: what you are reading why it is important. The basics
Overview of Timeline: What will happen
Definitions of terms introduced in Overview and Introduction:
Roles
Contracts Types
Timeline detailed phases
etc.
 />
Contracts
Audiences participate with different intentions in the economy. While players want easy access and little exposure to volatility, speculators prefer a capped supply and a return from changes of the market price. Additionally, functional requirements like escrow of reserve and investor voting complicate requirements for the token.
The Acebusters economy is build on 3 contract types: Nutz, Power and ABD to deliver the different use-cases for each audience.
The Nutz contract is the entry point to the economy by selling NTZ tokens for ether, keeping an auditable ether reserve, and purchasing tokens back at any time.
NTZ can be converted to illiquid shares of the economy through a process called powerUp and converted back to NTZ through powerDown.
The Acebuster Dollar (ABD) contract is a stable coin implementation backed by the value of NTZ itself. Each token is adjusted to be equal to one (1) United States Dollar..
Roles:
Seed Investor: Investor that purchases <token/> during the <x stage/>

Token Investor: Investor that purchases <token/> during the <x stage/>

Exec Team/Founders: the founder team that started the project and seeks to raise money and realize market success. Think of this like a multi-sig contract, 2 of 2 sigs needed. Members 2 execs.

Sales Administrators: represent the interests of the investors and users through the lifetime of the economy. Think of this like a multi-sig contract, 3 of 4 sigs needed. Members: 2 execs, 1 investor, 1 user. During the ICO this group is often called “escrow agents”.
Nutz Contract:
Read the safe token sale mechanism by Vlad Zamfir and get familiar with it. The Nutz contract implements the safe token sale mechanism as described by Vlad and extends it with a few capabilities. 

Functions Proposed by Vlad:
move_ceiling, and move_floor callable only by the sale administrator.
purchase_tokens, callable by anyone.
sell_tokens, callable by anyone.
The ERC20 token interface, callable by anyone.
allocate_funds_to_beneficiary, callable only by the sale administrator

Additional Functions:
Power pool - balance of tokens on address of power contract
power_up, implemented as ERC20 transfer to power pool, callable by the anyone.
borrow_out, converts NTZ to ABD at current market rate,  only callable by exec team.
Dead pool - balance of tokens on address of Nutz contract itself. There is no way to send money away from here. NTZ on this account are not counted in the total supply when purchasing tokens.
purchase_tokens, has been modified so that whenever NTZ are issued, a proportional amount (active power vs Nutz power) is issued into the power pool.
sell_tokens, has been modified so that whenever NTZ are burned, a proportional amount (active power vs Nutz power) is burned from the power pool.
Power Contract:
The power contract manages Acebuster Power, ABP represents a percentage share of the economy. The power contract notified every time when NTZ are transferred to it’s address in the Nutz contracts. It reacts by issuing ABP to the address of the sender in it’s own storage.

In a gist: When powering up, the user switches from holding an absolute amount of NTZ to holding a percentage amount of total NTZ. When powering down, user is payed out his percentage amount of current total supply.

Functions:
toggle_preemption, sets the preemption flag. When true, only flagged seed investors can power up. When false, everyone can power up, callable only by the sale administrator.
set_max_power, max_power is a parameter that sets a limit to how many shares can be power in-to by users. When max_power is reached, no further NTZ can be transferred to the power pool. callable only by the sale administrator.
The ERC20 token interface, callable by anyone.
The transfer function (part of ERC20 interface) is overloaded. When the transfer function is called with an amount, the first param (to address) is ignored, and the amount is used to initiate a power-down. A powerDown is a 3 month period in that the power will be converted into NTZ weekly chunk by chunk.

ABD Contract:
Each ABD token represents a promise that, when claimed, returns as many NTZ as needed to earn $1 at current market price. 

Functions:
claim_back, calls the ABD to receive amount of NTZ at market price to cover face value. Callable by anyone.
The ERC20 token interface, callable by anyone.
Booting up the Economy
Contract Initiation
The Nutz, Power and ABD contract start empty. The Nutz contract has ceiling set to infinity and floor to 0, so no tokens can be sold or purchased. All power is held by Nutz contract. No ABD are issued.

Nutz:


Power:


Stable:


ceilng
inf.
preemption
true




floor
0
maxPower
0 ABP




active
0 NTZ
active
0 ABP
active
0 ABD
power
0 NTZ
nutz
100 ABP




dead
0 NTZ








reserve
0 ETH










Founder Buy-In

The ceiling price is set to a low 4M NTZ : 1ETH by sales admins. The founders call purchase_tokens with 1 ETH. The ETH is put in reserve, the NTZ are minted and put in the account of the founders. 

Nutz:


Power:


ABD:


ceilng
4M N/E
pre
true




floor
0
maxPow
0




active
4M NTZ
active
0 ABP
active
0 ABD
power
0 NTZ
nutz
100 ABP




dead
0 NTZ








reserve
1 ETH











Founder Power Up
The founders power up 40% of the NTZ they hold and burn the other 60% by sending it to the account of the NTZ contract itself. 40% of the power should now be held by the founders and 60% by the Nutz contract.

Nutz:


Power:


ABD:


ceilng
70 N/E
pre
true




floor
1E /75N
maxPow
40 ABP




active
0 NTZ
active
40 ABP
active
0 ABD
power
1.6M NTZ
nutz
60 ABP




dead
2.4M NTZ








reserve
1 ETH









Lastly, ceiling is set to 70NTZ : 1ETH and floor to 1ETH : 75NTZ, opening the contract for users to buy in and play games. Notice that no-one can power_up to become an investor due to maxPower being exhausted by the founder shares.
Seed Buy-In
To start the ICO, ceiling is set to 100NTZ : 1ETH (the discount) and floor to 1ETH : 105NTZ, opening the contract for investment.
investors buy 300.000 NTZ at the price of 1ETH : 100NTZ, increasing the reserve to 3k ETH and the power pool to 1.8M NTZ. The floor stays at 1ETH : 105NTZ, producing a needed reserve of ~2.8k Eth.

Each investor that invests will be marked as seed investor in the power contract. As long as the preemption flag is on, only these investors are allowed to power up. Yet there is no available power, as maxPow is set to 40 ABP.

Nutz:


Power:


ABD:


ceilng
100 N/E
pre
true




floor
1E / 105N
max
40 ABP




active
0.3M NTZ
active
40 ABP
active
0 ABD
power
1.8M NTZ
nutz
60 ABP




dead
2.4M NTZ








reserve
3.001 ETH









ICO Goal Missed
If after 2 Month a reserve of 12k ETH can not be reached, the ICO is disabled, floor is set to 1NTZ : 100ETH and investors can withdraw their investment at the same price as invested. Founders shares can not be powered down, as to prevent them from stealing the ETH of investors.

Nutz:


Power:


ABD:


ceilng
100 N/E
pre
true




floor
1E / 100N
max
40 ABP




active
0.6M NTZ
active
40 ABP
active
0 ABD
power
2.0M NTZ
nutz
60 ABP




dead
2.4M NTZ








reserve
6.001 ETH








ICO Goal Reached

Once the ICO cap of 12k ETH is reached, the ceiling adjusts to 70NTZ : 1ETH, new purchase_token calls don’t flag buyers as seed investors any more. The floor moves to 1ETH : 75NTZ, but the reserve only allows a max floor of 1ETH : 100NTZ to account for total active supply with the reserve.

The maxPow increases to 60 ABP, opening the power contract to seed investors.

Nutz:


Power:


ABD:


ceilng
70 N/E
pre
true




floor
1E / 75N
maxPow
60 ABP




active
1.2M NTZ
active
40 ABP
active
0 ABD
power
2.4M NTZ
nutz
60 ABP




dead
2.4M NTZ








reserve
12.001 ETH









Seed PowerUp
All seed investors power up, moving 1.2M NTZ to power pool, increasing active power to 60%. 

Beneficiaries request a withdrawal of 3000 ETH (25% of reserve) for the first milestone. Sales admins approve and receive 1% of the withdrawal amount.

Nutz:


Power:


ABD:


ceilng
70 NTZ/E
pre
true




floor
1E / 75NTZ
max
60 ABP




active
0.0 NTZ
active
60 ABP
active
0 ABD
power
3.6M NTZ
nutz
40 ABP




dead
2.4M NTZ








reserve
9.001 ETH









Economic Growth

More and more players purchased tokens and hold an active balance in the game. Active supply grows to 500k NTZ, they have been purchased at an average 50 NTZ : 1ETH.

500k NTZ have added 750k NTZ to power pool, keeping investors in same share of economy.

Floor has been kept at 1ETH : 55 NTZ and secondary markets have formed around 50 NTZ : 1ETH, giving NTZ a market cap of 100k ETH (20M$ cap at 200$/ETH). Needed reserve is at ~9000 ETH.

Another 6000 ETH are withdrawn by the beneficiaries.

Nutz:


Power:


ABD:


ceilng
40 N/E
pre
true




floor
1E / 55N
max
60 ABP




active
~0.5M NTZ
active
60 ABP
active
0 ABD
power
~4.3M NTZ
nutz
40 ABP




dead
2.4M NTZ








reserve
~13K ETH









Secondary Offering
To open the secondary offering, the preemption flag is removed on the power contract. All NTZ holders, not only the seed investors, are able to power up.

The market price for NTZ is pushed up by demand and hits 40NTZ : 1ETH in expectation of maxPow moving up. Token trade moves from secondary markets back to the NTZ contract. After a while, 1M NTZ are sold to investors by the contract.

1M NTZ issued into active supply increase the power pool by 1.5M NTZ. Floor is adjusted upwards to 1ETH : 45NTZ and the needed reserve is at ~34k ETH. 





Nutz:


Power:


ABD:


ceilng
40 N/E
pre
false




floor
1E / 45N
maxPow
60 ABP




active
~1.5M NTZ
active
60 ABP
active
0 ABD
power
~5.8M NTZ
nutz
40 ABP




dead
2.4M NTZ








reserve
~38K ETH









Secondary PowerUp
maxPow is increased to 70 ABP and investors can grab 10% more of the total economy of ~9.7M NTZ (active + power + dead), costing them about 1M NTZ.

Needed reserve decreases to 9k Eth. 


Nutz:


Power:


ABD:


ceilng
30 N/E
pre
false




floor
1E / 45N
maxPow
70 ABP




active
~0.5M NTZ
active
70 ABP
active
0 ABD
power
~6.8M NTZ
nutz
30 ABP




dead
2.4M NTZ








reserve
~38K ETH













Stable Coin:
tbd.

Black swan scenario with different debt ratios:


