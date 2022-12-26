# Objectives
Building a very simple todo app to demonstrating,
1) one of the way to structure microservices based webapp.
2) Authentication/Authorization using Keycloak

# TechStack
1) Frontend - ReactJs
2) BFF - Flask
3) BACKEND - Django

# Journey

## 1. Building Protected Page using React & Keycloak 
1) Create Realm and Public Client in Keycloak
2) Create React app and integrate with Keycloak

## 2. Integrate with BFF & Backend
1) Create BFF & Backend APIs
2) SetupProxy
3) Authentication handling at BFF

## 3. Implement Authorization
1) Identifing Approaches 
2) Implementing

# Questions to Answer
1) How to achieve authorization when we have only public client?
2) When to create Confidential/Public Client in keycloak?
3) Why to fetch public key dynamically for verifying JWT token (RSA-256)?
4) Why Audience is present in Access Token and how to add our application in audience?
5) 