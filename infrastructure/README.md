# TaskFlow Infrastructure (Terraform / AWS)

Cloud infrastructure as code and deployment configuration for TaskFlow,
owned by **Priya Sharma** (Cloud Engineer).

## What belongs here (Sprint 1+)
- `terraform/` — AWS provider config, VPC, subnets, security groups, RDS
  PostgreSQL instance, ElastiCache Redis, ECS/Fargate services, S3 bucket,
  IAM roles, CloudWatch, ACM certificates.
- `docker/` — shared Docker Compose for local dev (optional).
- `scripts/` — bootstrap / deploy helper scripts.

## Status
> This directory is a **scaffold**. No Terraform resources are provisioned yet.
> TODO: Priya Sharma — add `terraform/` modules and a remote state backend
> (S3 + DynamoDB lock) before any `terraform apply`.
