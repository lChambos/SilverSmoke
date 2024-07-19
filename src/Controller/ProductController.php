<?php

namespace App\Controller;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use http\Client\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class ProductController extends AbstractController
{
    #[Route('/api/products', name: 'api_products', methods: ['GET'])]
    public function index(ProductRepository $productRepository): JsonResponse
    {
        $products = $productRepository->findVisibleProducts();
        return $this->json($products);
    }

    #[Route('/api/products', name: 'product_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $product = new Product();
        $product->setTitle($data['title']);
        $em->persist($product);
        $em->flush();

        return $this->json($product, 201);
    }

    #[Route('/api/products/{id}', name: 'product_update', methods: ['PUT'])]
    public function update($id, Request $request, ProductRepository $productRepository, EntityManagerInterface $em): JsonResponse
    {
        $product = $productRepository->find($id);
        if (!$product) {
            return $this->json(['message' => 'Product not found'], 404);
        }

        $data = json_decode($request->getContent(), true);
        $product->setTitle($data['title']);
        $product->setPrice($data['price']);
        $em->flush();

        return $this->json($product);
    }

    #[Route('/api/products/{id}', name: 'product_delete', methods: ['DELETE'])]
    public function delete($id, ProductRepository $productRepository, EntityManagerInterface $em): JsonResponse
    {
        $product = $productRepository->find($id);
        if (!$product) {
            return $this->json(['message' => 'Product not found'], 404);
        }

        $em->remove($product);
        $em->flush();

        return $this->json(['message' => 'Product deleted']);
    }

    #[Route('/api/products/{id}/visibility', name: 'product_visibility', methods: ['PATCH'])]
    public function updateVisibility($id, Request $request, ProductRepository $productRepository, EntityManagerInterface $em): JsonResponse
    {
        $product = $productRepository->find($id);
        if (!$product) {
            return $this->json(['message' => 'Product not found'], 404);
        }

        $data = json_decode($request->getContent(), true);
        if (!isset($data['isVisible'])) {
            return $this->json(['message' => 'isVisible field is required'], 400);
        }

        $product->setVisble((bool)$data['isVisible']);
        $em->flush();

        return $this->json($product);
    }
}
